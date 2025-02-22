import styles from './footer.module.css';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <p className={styles.footer__copyright}>
            © 2024 Alerta Patitas. Todos los derechos reservados.
          </p>
          
          <div className={styles.footer__social}>
            <a 
              href="https://www.instagram.com/davidzambrano_coc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footer__social_link}
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/david-zambrano-corral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footer__social_link}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footer__social_link}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
