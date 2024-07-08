
import styles from "./contacto.module.css";


const ContactPage = () => {


  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <h1 className="text-5xl font-bold text-black rounded-xl p-10">contactanos y te daremos un usuario de forma gratuita</h1>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input className={styles.inputs} type="text" placeholder="Nombre del refugio" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Celular" />
          <input type="text" placeholder="Pagina web" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Enviar Solicitud</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;