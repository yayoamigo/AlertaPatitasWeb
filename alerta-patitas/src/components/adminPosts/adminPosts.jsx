import styles from "./adminPosts.module.css";

const AdminPosts =() => {

  return (
    <div className={styles.container}>
      <h1>Dogo</h1>
        <div className={styles.post} key={1}>
          <div className={styles.detail}>
            <img
              src={"/form.jpg"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>Perro</span>
          </div>
          <form >
            <input type="hidden" name="id" value="2" />
            <button className={styles.borrarBtn}>Borrar</button>
            <button className={styles.adoptadaBtn}>Adoptada</button>
            <button className={styles.editarBtn}>Editar</button>
          </form>
        </div>
    </div>
  );
};

export default AdminPosts;
