import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}></div>
      <p className={styles.loader__text}>Cargando...</p>
    </div>
  );
};

export default Loading; 