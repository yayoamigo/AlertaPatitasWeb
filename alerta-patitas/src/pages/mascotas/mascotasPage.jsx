import Card from '../../components/card/Card';
import styles from './mascotas.module.css';
import { useMediaQuery } from "../../hooks/use-media-query";
import { fetchPets } from "../../redux/adminPets";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, SlidersHorizontal } from 'lucide-react';
import Loading from "../../components/ui/loading";

const MascotasPage = () => {
  const isDesktop = useMediaQuery('(min-width: 1069px)');
  const dispatch = useDispatch();
  const { pets, isFetching, error } = useSelector((state) => state.adoptionPets);
  
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    size: '',
    status: '',
    city: '',
  });
  const [sortBy, setSortBy] = useState('name'); // Default sort by name
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchPets())
      .unwrap()
      .then(result => {
        console.log('Fetched pets:', result);
      })
      .catch(error => {
        console.error('Error fetching pets:', error);
      });
  }, [dispatch]);

  // Log state changes
  useEffect(() => {
    console.log('Current state:', { pets, isFetching, error });
  }, [pets, isFetching, error]);

  // Filter and sort pets
  const filteredPets = pets?.filter(pet => {
    const matchesSearch = pet.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pet.type?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = (
      (!filters.type || pet.type?.toLowerCase() === filters.type.toLowerCase()) &&
      (!filters.size || pet.size?.toLowerCase() === filters.size.toLowerCase()) &&
      (!filters.status || pet.status?.toLowerCase() === filters.status.toLowerCase()) &&
      (!filters.city || pet.city?.toLowerCase() === filters.city.toLowerCase())
    );

    return matchesSearch && matchesFilters;
  }) || [];

  // Get unique values for filter options
  const getUniqueValues = (field) => {
    return [...new Set(pets?.map(pet => pet[field]))];
  };

  if (!isDesktop) {
    return (
      <div className={styles.aviso}> 
        <h1>Por favor, utiliza una pantalla más grande</h1>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.controlsContainer}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar por nombre o ciudad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Filters Toggle Button */}
        <button 
          className={styles.filterToggle}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal />
          Filtros
        </button>

        {/* Filters Section */}
        {showFilters && (
          <div className={styles.filtersContainer}>
            {/* Type Filter */}
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className={styles.filterSelect}
            >
              <option value="">Tipo de mascota</option>
              {getUniqueValues('type').map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Size Filter */}
            <select
              value={filters.size}
              onChange={(e) => setFilters({...filters, size: e.target.value})}
              className={styles.filterSelect}
            >
              <option value="">Tamaño</option>
              {getUniqueValues('size').map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className={styles.filterSelect}
            >
              <option value="">Estado</option>
              {getUniqueValues('status').map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            {/* City Filter */}
            <select
              value={filters.city}
              onChange={(e) => setFilters({...filters, city: e.target.value})}
              className={styles.filterSelect}
            >
              <option value="">Ciudad</option>
              {getUniqueValues('city').map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="name">Ordenar por nombre</option>
              <option value="age">Ordenar por edad</option>
              <option value="weight">Ordenar por peso</option>
            </select>

            {/* Clear Filters Button */}
            <button
              onClick={() => {
                setFilters({
                  type: '',
                  size: '',
                  status: '',
                  city: '',
                });
                setSortBy('name');
                setSearchTerm('');
              }}
              className={styles.clearFiltersButton}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Results Count - Only show when not loading */}
      {!isFetching && (
        <div className={styles.resultsCount}>
          {filteredPets?.length} mascotas encontradas
        </div>
      )}

      {/* Pets Grid with Loading State */}
      <div className={styles.container}>
        {isFetching ? (
          <Loading />
        ) : error ? (
          <p className={styles.error}>Error al cargar las mascotas</p>
        ) : filteredPets?.length > 0 ? (
          filteredPets.map((pet) => (
            <Card pet={pet} key={pet.id} />
          ))
        ) : (
          <p className={styles.noResults}>No se encontraron mascotas</p>
        )}
      </div>
    </div>
  );
};

export default MascotasPage;