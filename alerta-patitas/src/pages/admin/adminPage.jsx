import styles from "./admin.module.css";
import AdminPosts from "../../components/adminPosts/adminPosts";
import AdminPostForm from "../../components/adminPostForm/adminPostForm";



const AdminPage =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>         
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
            <AdminPosts />
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = "111" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;