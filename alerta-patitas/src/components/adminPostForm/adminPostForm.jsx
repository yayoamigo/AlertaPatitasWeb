import { useState, useRef } from 'react';
import styles from "./adminPostForm.module.css";
import { useDispatch } from 'react-redux';
import { postPets } from '../../redux/adminPets';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../utils/firebase";
import { fetchPets } from '../../redux/adminPets';

const AdminPostForm = ({ pet = {} }) => {
  const [formData, setFormData] = useState({
    name: pet.name || '',
    status: pet.status || '',
    type: pet.type || '',
    size: pet.size || '',
    city: pet.city || '',
    activityLevel: pet.activityLevel || '',
    weight: pet.weight || '',
    age: pet.age || '',
    story: pet.story || '',
    shelterId: 1,
    photo: pet.photo || '',
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setFilePreview(null);
    URL.revokeObjectURL(filePreview); // Revoke the old object URL to free memory
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.status) newErrors.status = "Status is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.size) newErrors.size = "Size is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.activityLevel) newErrors.activityLevel = "Activity level is required";
    if (formData.weight <= 0) newErrors.weight = "Weight must be a positive number";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.story) newErrors.story = "Story is required";
    if (!file) newErrors.photo = "Photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRefInstance = storageRef(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRefInstance, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
            }
          },
          (error) => {
            alert('Failed to upload image: ' + error.message);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const updatedFormData = { ...formData, photo: downloadURL };
            await dispatch(postPets(updatedFormData)).unwrap();
            alert('Form submitted successfully!');

            dispatch(fetchPets());


            // Reset form data and file input
            setFormData({
              shelterId: 1,
              name: '',
              status: '',
              type: '',
              size: '',
              city: '',
              activityLevel: '',
              weight: '', // Reset weight to an empty string
              age: '',
              story: '',
              photo: ''
            });
            setFile(null);
            setFilePreview(null);
            URL.revokeObjectURL(filePreview); // Revoke the old object URL to free memory
            if (fileInputRef.current) {
              fileInputRef.current.value = ''; // Reset file input
            }
          }
        );
      } catch (error) {
        alert('Failed to submit the form: ' + error.message);
      }
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={formData.id || ''} />

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}

      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        placeholder="Status"
      />
      {errors.status && <span className={styles.error}>{errors.status}</span>}

      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      {errors.type && <span className={styles.error}>{errors.type}</span>}

      <input
        type="number"
        name="size"
        value={formData.size || ''}
        onChange={handleChange}
        placeholder="Size"
      />
      {errors.size && <span className={styles.error}>{errors.size}</span>}

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      {errors.city && <span className={styles.error}>{errors.city}</span>}

      <input
        type="text"
        name="activityLevel"
        value={formData.activityLevel}
        onChange={handleChange}
        placeholder="Activity Level"
      />
      {errors.activityLevel && <span className={styles.error}>{errors.activityLevel}</span>}

      <input
        type="number"
        name="weight"
        value={formData.weight || ''}
        onChange={handleChange}
        placeholder="Weight (kg)"
      />
      {errors.weight && <span className={styles.error}>{errors.weight}</span>}

      <input
        type="number"
        name="age"
        value={formData.age || ''}
        onChange={handleChange}
        placeholder="Age"
      />
      {errors.age && <span className={styles.error}>{errors.age}</span>}

      <textarea
        name="story"
        value={formData.story}
        onChange={handleChange}
        placeholder="Story"
        rows={10}
      />
      {errors.story && <span className={styles.error}>{errors.story}</span>}

      <input
        type="file"
        name="photo"
        onChange={handleFileChange}
        accept="image/*"
        ref={fileInputRef} // Attach the ref to the file input
      />
      {filePreview && (
        <div className={styles.previewContainer}>
          <img src={filePreview} alt="Preview" className={styles.preview} />
          <button type="button" className={styles.removeButton} onClick={handleRemoveImage}>
            &times;
          </button>
        </div>
      )}
      {errors.photo && <span className={styles.error}>{errors.photo}</span>}

      <button type="submit">Agregar mascota</button>
    </form>
  );
};

export default AdminPostForm;
