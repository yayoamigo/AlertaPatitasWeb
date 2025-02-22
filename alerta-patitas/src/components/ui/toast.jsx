import { useState, useEffect } from 'react';
import styles from './toast.module.css';

const Toast = ({ message, duration = 1000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
};

export default Toast; 