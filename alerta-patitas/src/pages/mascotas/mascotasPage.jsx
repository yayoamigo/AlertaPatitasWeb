import Card from '../../components/card/Card';
import styles from './mascotas.module.css';
import { useMediaQuery } from "../../hooks/use-media-query";




const MascotasPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1069px)');

  
  return (
    isDesktop ? (
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    ) : (
     <div className={styles.aviso}> 
      <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    )
  );
};

export default MascotasPage;