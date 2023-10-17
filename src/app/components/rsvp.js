import styles from '../page.module.css';
import React, { useState } from 'react';

const Rsvp = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      // Gérer le succès de l'envoi
      console.log('E-mail envoyé avec succès.');
    } else {
      // Gérer l'échec de l'envoi
      console.error('Erreur lors de l\'envoi de l\'e-mail.');
    }
  };
  
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.mailInfos}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
            
      <div className={styles.formGroupTextarea}>
        <label className={styles.label} htmlFor="message">Message :</label>
        <ul>
          Merci de préciser dans le mail : 
          <li>le nombre de personnes qui seront présentes ainsi que leur nom complet. </li>
          <li>le nombre d'enfants ainsi que leur âge.</li>
        </ul>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>
      <button className={styles.button} type="submit">Envoyer</button>
    </form>
  );
};

export default Rsvp;
