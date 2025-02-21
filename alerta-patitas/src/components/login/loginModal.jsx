import { useState } from 'react';
import styles from './loginModal.module.css';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    try {
      // Add your login logic here
      console.log('Login attempt with:', email, password);
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  const handleResetPassword = () => {
    // TODO: Add password reset logic here
    console.log('Reset password for:', email);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal}>
        <button className={styles.modal__close} onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className={styles.modal__title}>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} className={styles.modal__form}>
          {error && <p className={styles.modal__error}>{error}</p>}
          
          <div className={styles.modal__input_group}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className={styles.modal__input_group}>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className={styles.modal__buttons}>
            <button type="submit" className={styles.modal__button}>
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={handleResetPassword}
              className={`${styles.modal__button} ${styles['modal__button--secondary']}`}
            >
              Restablecer Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal; 