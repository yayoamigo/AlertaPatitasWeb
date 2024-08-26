import styles from "./admin.module.css";
import AdminPosts from "../../components/adminPosts/adminPosts";
import AdminPostForm from "../../components/adminPostForm/adminPostForm";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from "../../redux/adminPets";

const AdminPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1115px)');
  const dispatch = useDispatch();
  const { pets, isFetching, error } = useSelector((state) => state.adoptionPets);
  

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  console.log(pets);

  const examplePet = {
    id: 1,
    name: '',
    status: '',
    type: '',
    size: '',
    city: '',
    activityLevel: '',
    weight: 0,
    age: '',
    story: '',
    photo: '',
  };

  return (
    isDesktop ? (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            { !isFetching && !error && pets && pets.length > 0 ? (
              pets.map((pet) => (
                <AdminPosts pet={pet} key={pet.id} />
              ))
            ) : (
              <p>No pets available</p>
            )}
          </div>
          <div className={styles.col2}>
            <AdminPostForm pet={examplePet} />
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.aviso}>
        <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    )
  );
};  

export default AdminPage;
