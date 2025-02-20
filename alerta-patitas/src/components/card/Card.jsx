import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({pet}) => {
  return (
    <div className={styles.card}>
      <Link to={`/mascota/${pet.id}`}>
        <div className={styles.card__container}>
          <div className={styles.card__image_container}>
            <img
              src={pet.photo}
              alt={pet.name}
              className={styles.card__image}
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>
              {pet.name} ({pet.age})
            </h3>
            <span className={styles.card__tag}>
              {pet.type}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
