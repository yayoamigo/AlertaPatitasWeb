import styles from "./admin.module.css";
import AdminPosts from "../../components/adminPosts/adminPosts";
import AdminPostForm from "../../components/adminPostForm/adminPostForm";
import { useMediaQuery } from "../../hooks/use-media-query";

const AdminPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1115px)');


  const examplePet = {
    id: 1,
    name: '',
    status: '',
    type: '',
    size: '',
    city: '',
    activityLevel: '',
    weight: 0,
    age: '',
    story: '',
    photo: '',
  };

  return (
    isDesktop ? (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
          </div>
          <div className={styles.col2}>
            <AdminPostForm pet={examplePet} />
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.aviso}>
        <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    )
  );
};

export default AdminPage;
