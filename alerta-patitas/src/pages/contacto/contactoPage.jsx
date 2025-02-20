import styles from "./contacto.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <h1 className={styles.contact__title}>
          Escribenos y creamos tu cuenta
        </h1>
        <div className={styles.contact__form_container}>
          <form className={styles.contact__form}>
            <input 
              type="text" 
              placeholder="Nombre del refugio" 
              required
              className={styles.contact__input}
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              className={styles.contact__input}
            />
            <input 
              type="tel" 
              placeholder="Celular" 
              required
              className={styles.contact__input}
            />
            <input 
              type="url" 
              placeholder="Pagina web"
              className={styles.contact__input}
            />
            <textarea
              rows="5"
              placeholder="Mensaje"
              required
              className={`${styles.contact__input} ${styles.contact__textarea}`}
            ></textarea>
            <button type="submit" className={styles.contact__button}>
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;