import styles from "./nosotros.module.css";
import { motion } from "framer-motion"; // Ensure this import is correct
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

const NosotrosPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
              Encuentra a tu nuevo mejor amigo. Busca de acuerdo a tus gustos{" "}
              <Highlight className="text-black dark:text-white">
                y tus necesidades
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          <p className={styles.desc}>
            En Alerta Patitas, conectamos mascotas con hogares amorosos y ayudamos a reunir mascotas perdidas con sus dueños. 
            Creemos en la compasión, la comunidad y el cuidado. Somos la mejor solución para la adopción de mascotas y la búsqueda de animales perdidos. 
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>50+</h1>
              <p>Mascotas adoptadas</p>
            </div>
            <div className={styles.box}>
              <h1>30+</h1>
              <p>Mascotas encontradas</p>
            </div>
            <div className={styles.box}>
              <h1>30+</h1>
              <p>Voluntarios activos</p>
            </div>
          </div>
        </div>
        <motion.div
          className={styles.imgContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/pupper.png"
            alt="About Image"
            className={styles.img}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NosotrosPage;
