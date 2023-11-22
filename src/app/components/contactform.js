import styles from '../page.module.css';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {

  const [state, handleSubmit] = useForm("xjvqdqll");
  if (state.succeeded) {
      return <p>Merci pour votre retour !</p>;
  };
  
  return (
    <div>  
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.mailInfos}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder='exemple@gmail.com'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
              
        <div className={styles.formGroupTextarea}>
          <label className={styles.label} htmlFor="message">Message :</label>
          <ul>
            Merci de préciser dans le mail : 
            <li>le nombre de personnes qui seront présentes ainsi que leur nom complet. </li>
            <li>le nombre d&apos;enfants ainsi que leur âge.</li>
          </ul>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder=
            {`Bonjour vous deux, Nous serons trois pour le vin d'honneur/repas. Il y aura l'empereur, sa femme et le petit prince de 5 ans. Au plaisir de vous voir !`}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className={styles.formButton}>
          <button className={styles.button} type="submit" disabled={state.submitting}>Envoyer</button>
        </div>
        
      </form>
    </div>
  );
};

export default ContactForm;
