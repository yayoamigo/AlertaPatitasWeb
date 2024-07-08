import styles from "./home.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

const Home = () => {
  const words = [
    {
      text: "Ellos",
    },
    {
      text: "estan",
    },
    {
      text: "esperando",
    },
    {
      text: "un hogar",
      className: "text-primary-DEFAULT dark:text-primary-DEFAULT",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
    <h1 className="text-xl sm:block font-bold text-center mt-8 mb-4 text-neutral-900 dark:text-white">
  El camino hacia la adopción comienza aquí
</h1>

      <TypewriterEffectSmooth words={words} />
      <span className="mb-5 text-2xl sm:text-sm ">Para empezar, descarga nuestra app</span>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10  bg-white  dark:border-black text-black  border-solid border-2 border-black">
          <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
          Google Play
        </button>
        <button className="w-40 h-10  bg-black text-white border border-black ">
          <FontAwesomeIcon icon={faApple} className="mr-2" />
          App store
        </button>
      </div>
    </div>
    </div>
    <motion.div
        className={styles.imgContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/dogo.png" alt="About Image"  className={styles.img} />
      </motion.div>
      </div>
  );
}


export default Home;