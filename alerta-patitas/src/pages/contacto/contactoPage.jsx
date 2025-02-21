import styles from "./contacto.module.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    shelter_name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        'service_9od5xgw', // Replace with your EmailJS service ID
        'template_8ukagq6', // Replace with your EmailJS template ID
        {
          to_email: 'yayopython@gmail.com',
          from_name: formData.shelter_name,
          from_email: formData.email,
          phone: formData.phone,
          website: formData.website,
          message: formData.message,
        },
        'XEiPPFCqsJ-sN9bo7' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({
          shelter_name: '',
          email: '',
          phone: '',
          website: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <h1 className={styles.contact__title}>
          ¿Quieres ser parte de nuestra red de refugios?
        </h1>
        <div className={styles.contact__form_container}>
          {submitStatus.message && (
            <div className={`${styles.contact__alert} ${styles[`contact__alert--${submitStatus.type}`]}`}>
              {submitStatus.message}
            </div>
          )}
          <form className={styles.contact__form} onSubmit={handleSubmit}>
            <div className={styles.contact__input_group}>
              <label htmlFor="shelter-name">Nombre del refugio</label>
              <input 
                id="shelter-name"
                name="shelter_name"
                type="text" 
                value={formData.shelter_name}
                onChange={handleChange}
                placeholder="Ej: Refugio Patitas Felices" 
                required
                className={styles.contact__input}
              />
            </div>

            <div className={styles.contact__input_group}>
              <label htmlFor="email">Correo electrónico</label>
              <input 
                id="email"
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com" 
                required
                className={styles.contact__input}
              />
            </div>

            <div className={styles.contact__input_group}>
              <label htmlFor="phone">Teléfono</label>
              <input 
                id="phone"
                name="phone"
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="+593 xxx xxx xxxx" 
                required
                className={styles.contact__input}
              />
            </div>

            <div className={styles.contact__input_group}>
              <label htmlFor="website">Página web (opcional)</label>
              <input 
                id="website"
                name="website"
                type="url" 
                value={formData.website}
                onChange={handleChange}
                placeholder="https://www.turefugio.com"
                className={styles.contact__input}
              />
            </div>

            <div className={styles.contact__input_group}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu refugio..."
                required
                className={`${styles.contact__input} ${styles.contact__textarea}`}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.contact__button}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;