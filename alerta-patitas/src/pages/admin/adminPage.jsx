import styles from "./admin.module.css";
import AdminPosts from "../../components/adminPosts/adminPosts";
import AdminPostForm from "../../components/adminPostForm/adminPostForm";
import { useMediaQuery } from "../../hooks/use-media-query";
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from "../../redux/adminPets";
import Loading from "../../components/ui/loading";

const AdminPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1115px)');
  const dispatch = useDispatch();
  const { pets, isFetching, error } = useSelector((state) => state.adoptionPets);
  

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);


  // const examplePet = {
  //   id: 1,
  //   name: '',
  //   status: '',
  //   type: '',
  //   size: '',
  //   city: '',
  //   activityLevel: '',
  //   weight: 0,
  //   age: '',
  //   story: '',
  //   photo: '',
  // };

  if (!isDesktop) {
    return (
      <div className={styles.admin__mobile_notice}>
        <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    );
  }

  return (
    <div className={styles.admin}>
      <div className={styles.admin__container}>
        <div className={styles.admin__row}>
          <div className={styles.admin__column}>
            {isFetching ? (
              <Loading />
            ) : error ? (
              <p className={styles.admin__error}>Error al cargar las mascotas</p>
            ) : pets && Array.isArray(pets) && pets.length > 0 ? (
              pets.map((pet) => (
                <AdminPosts key={pet.id} pet={pet} />
              ))
            ) : (
              <p className={styles.admin__empty}>No hay mascotas disponibles</p>
            )}
          </div>
          <div className={styles['admin__column-right']}>
            <AdminPostForm />
          </div>
        </div>
      </div>
    </div>
  );
};  

export default AdminPage;
