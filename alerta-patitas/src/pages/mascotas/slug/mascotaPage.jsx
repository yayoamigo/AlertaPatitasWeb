import React from 'react';
import styles from './mascota.module.css';

const post = {
  img: '/form.jpg',
  title: 'Ariana',
  userId: 1,
  createdAt: new Date('2021-09-20'),
  desc: 'Descripción de la perrita.',
  species: 'Perro',
  age: '2 años 9 meses',
  breed: 'Mestizo',
  weight: '0 kg',
  size: 'Grande',
  ageStage: 'Joven',
  activityLevel: 'Media',
  personality: ['Cariñosa', 'Me gusta la compañía', 'Juguetona'],
  health: ['Desparasitada', 'Con microchip', 'Vacunada']
};

const MascotaPage = () => {
  return (
    <section className={styles.wrapper}>
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <img src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publicado</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
        <div className={styles.infoSection}>
          <h2>Mis datos</h2>
          <ul className={styles.infoList}>
            <li><strong>Especie:</strong> {post.species}</li>
            <li><strong>Edad:</strong> {post.age}</li>
            <li><strong>Raza:</strong> {post.breed}</li>
            <li><strong>Peso:</strong> {post.weight}</li>
            <li><strong>Tamaño:</strong> {post.size}</li>
            <li><strong>Etapa:</strong> {post.ageStage}</li>
            <li><strong>Nivel de actividad:</strong> {post.activityLevel}</li>
          </ul>
        </div>
        <div className={styles.infoSection}>
          <h2>¿Cómo soy?</h2>
          <ul className={styles.personalityList}>
            {post.personality.map((trait, index) => (
              <li key={index} className={styles.personalityItem}>{trait}</li>
            ))}
          </ul>
        </div>
        <div className={styles.infoSection}>
          <h2>Me entregan</h2>
          <ul className={styles.healthList}>
            {post.health.map((item, index) => (
              <li key={index} className={styles.healthItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default MascotaPage;
