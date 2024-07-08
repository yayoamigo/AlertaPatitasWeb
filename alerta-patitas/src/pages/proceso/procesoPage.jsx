import { motion } from 'framer-motion';
import { Smartphone, User, Search, Phone, Heart } from 'lucide-react';
import styles from './proceso.module.css';


const ProcesoPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.requirementsHeadlines}>
        <h1 className={styles.mainTitle}>Nuestro proceso para adoptar</h1>
        <p className={styles.subtitle}>Nuestro proceso es sencillo y te adyuamos en cada etapa:</p>

        <div className={styles.rItemContainer}>
          {[
            { color: '#96e8ec', icon: <Smartphone />, text: 'Descarga la aplicación para Android o iOS' },
            { color: '#96e8ec', icon: <User />, text: 'Crea una cuenta gratis o inicia sesión con Google' },
            { color: '#96e8ec', icon: <Search />, text: 'Encuentra la mascota que deseas adoptar dependiendo de tus gustos y necesidades' },
            { color: '#96e8ec', icon: <Phone />, text: 'Da click en "Adoptar" y te podrás comunicar por WhatsApp con el refugio' },
            { color: '#ff6366', icon: <Heart />, text: 'Siente el amor incondicional de tu nuevo mejor amigo' },
          ].map((item, index) => (
            <motion.div
              className={styles.rItem}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.rLogo} style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
              <h5 className={styles.itemText}>{item.text}</h5>
            </motion.div>
          ))}
        </div>
      </div>
      <img src="/pug.png" alt="pug" width={500} height={500} className={styles.image} />
    </section>
  );
};

export default ProcesoPage;

