import styles from "./adminPosts.module.css";

const AdminPosts = ({ pet }) => {
  const handleDelete = () => {
    console.log("Borrado");
  };

  const handleAdopted = () => {
    console.log("Adoptado");
  };

  const handleEdit = () => {
    console.log("Editado");
  };

  return (
    <div className={styles.container}>
      <div className={styles.post} key={pet.id}>
        <div className={styles.detail}>
          <img
            src={pet.photo}
            alt={pet.name}
            className={styles.petImage}
          />
          <div>
            <h2 className={styles.petName}>{pet.name}</h2>
            <span className={styles.petType}>{pet.type}</span>
          </div>
        </div>
        <div className={styles.formBtns}>
          <button
            className={styles.borrarBtn}
            onClick={handleDelete}
          >
            Borrar
          </button>
          <button
            className={styles.adoptadaBtn}
            onClick={handleAdopted}
          >
            Adoptada
          </button>
          <button
            className={styles.editarBtn}
            onClick={handleEdit}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
