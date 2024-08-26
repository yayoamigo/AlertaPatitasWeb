import Card from '../../components/card/Card';
import styles from './mascotas.module.css';
import { useMediaQuery } from "../../hooks/use-media-query";
import { fetchPets } from "../../redux/adminPets";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const MascotasPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1069px)');
  const dispatch = useDispatch();
  const { pets, isFetching, error } = useSelector((state) => state.adoptionPets);
  

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);


  
  return (
    isDesktop ? (
      <div className={styles.container}>
    { !isFetching && !error && pets && pets.length > 0 ? (
              pets.map((pet) => (
                <Card pet={pet} key={pet.id} />
              ))
            ) : (
              <p>No pets available</p>
            )}
      </div>
    ) : (
     <div className={styles.aviso}> 
      <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    )
  );
};

export default MascotasPage;