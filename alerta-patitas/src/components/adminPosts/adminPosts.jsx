import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePet, updatePetStatus, updatePet } from '../../redux/adminPets';
import styles from "./adminPosts.module.css";
import AdminPostForm from '../adminPostForm/adminPostForm';

const AdminPosts = ({ pet }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleDelete = async () => {
    if (showConfirmDelete) {
      try {
        await dispatch(deletePet(pet.id)).unwrap();
      } catch (error) {
        alert('Error al borrar la mascota');
      }
    } else {
      setShowConfirmDelete(true);
    }
  };

  const handleAdopted = async () => {
    try {
      await dispatch(updatePetStatus(pet.id)).unwrap();
    } catch (error) {
      alert('Error al actualizar el estado de la mascota');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={styles.post__edit_form}>
        <AdminPostForm 
          pet={pet} 
          isEditing={true}
          onCancel={handleCancelEdit}
          onSuccess={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__container}>
        <div className={styles.post__details}>
          <img
            src={pet.photo}
            alt={pet.name}
            className={styles.post__image}
          />
          <div className={styles.post__info}>
            <h2 className={styles.post__name}>{pet.name}</h2>
            <span className={styles.post__type}>{pet.type}</span>
            <span className={`${styles.post__status} ${styles[`post__status--${pet.status?.toLowerCase() || 'available'}`]}`}>
              {pet.status || 'Disponible'}
            </span>
          </div>
        </div>
        <div className={styles.post__actions}>
          {showConfirmDelete ? (
            <>
              <button
                className={`${styles.post__button} ${styles['post__button--delete']}`}
                onClick={handleDelete}
              >
                Confirmar
              </button>
              <button
                className={`${styles.post__button} ${styles['post__button--edit']}`}
                onClick={() => setShowConfirmDelete(false)}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                className={`${styles.post__button} ${styles['post__button--delete']}`}
                onClick={handleDelete}
              >
                Borrar
              </button>
              <button
                className={`${styles.post__button} ${styles['post__button--adopt']} ${pet.status === 'Adoptado' ? styles['post__button--disabled'] : ''}`}
                onClick={handleAdopted}
                disabled={pet.status === 'Adoptado'}
              >
                {pet.status === 'Adoptado' ? 'Ya adoptado' : 'Marcar adoptado'}
              </button>
              <button
                className={`${styles.post__button} ${styles['post__button--edit']}`}
                onClick={handleEdit}
              >
                Editar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
