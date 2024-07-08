/* eslint-disable react/prop-types */

import styles from "./adminPostForm.module.css";

const AdminPostForm = ({userId}) => {
  
  
  return (
    <form  className={styles.container}>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Agregar mascota</button>
    </form>
  );
};

export default AdminPostForm;
