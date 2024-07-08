import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.cardcontainer}>
      <Link to={`/mascota/jsjsjs`}>
        <div className={styles.card}>
          <img
            src={`/dogo.png`}
            alt="Pet Image"
            height="200"
            width="400"
            className="cover rounded-[22px]"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Milo (5)
          </p>
          <span className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            Hembra
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
