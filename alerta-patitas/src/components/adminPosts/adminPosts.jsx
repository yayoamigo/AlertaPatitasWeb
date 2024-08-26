import styles from "./adminPosts.module.css";


const AdminPosts =({pet}) => {
 
  const handleDelete = () => {  
    console.log("Borrado");
  };

  const handleAdopted = () => {
    console.log("Adoptado");
  }

  const handleEdit = () => {
    console.log("Editado");
  }

  return (
    <div className={styles.container}>
      <h1>{pet.name}</h1>
        <div className={styles.post} key={1}>
          <div className={styles.detail}>
            <img
              src={pet.photo}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{pet.type}</span>
          </div>
          <form className={styles.formBtns}>
            <button className={styles.borrarBtn} onClick={handleDelete}>Borrar</button>
            <button className={styles.adoptadaBtn} onClick={handleAdopted} >Adoptada</button>
            <button className={styles.editarBtn} onClick={handleEdit}>Editar</button>
          </form>
        </div>
    </div>
  );
};

export default AdminPosts;
