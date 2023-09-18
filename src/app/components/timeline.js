import React, { useEffect } from 'react';
import styles from '../page.module.css';


const Timeline = () => {
    useEffect(() => {
        console.log('Composant Timeline chargé');
        const cards = document.querySelectorAll('.card');
    
        const handleScroll = () => {
            console.log('Défilement détecté');
          cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
              card.classList.add('visible');
              console.log('Carte visible :', card);
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className={styles.timeline}>
    <div className={styles.outer}>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>Rdv à l'Eglise</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Timeline;
