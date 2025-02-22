import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './mascota.module.css';

const MascotaPage = () => {
  
  const { slug } = useParams();
  
  
  const { pets } = useSelector((state) => state.adoptionPets);
  
  
  const pet = pets.find((p) => p.id === slug);

  if (!pet) {
    return (
      <div className={styles.wrapper}>
        <h1>Mascota no encontrada</h1>
      </div>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img 
            src={pet.photo} 
            alt={pet.name}
            className={styles.img}
            width={500}
            height={500}
          />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{pet.name}</h1>
          
          <div className={styles.detail}>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Edad</span>
              <span className={styles.detailValue}>{pet.age} años</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Tamaño</span>
              <span className={styles.detailValue}>{pet.size}</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Ciudad</span>
              <span className={styles.detailValue}>{pet.city}</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Nivel de Actividad</span>
              <span className={styles.detailValue}>{pet.activityLevel}</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Peso</span>
              <span className={styles.detailValue}>{pet.weight} kg</span>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2>Historia</h2>
            <p className={styles.content}>{pet.story}</p>
          </div>

          <div className={styles.infoSection}>
            <h2>Estado</h2>
            <span className={`${styles.statusBadge} ${styles[pet.status.toLowerCase()]}`}>
              {pet.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotaPage;
