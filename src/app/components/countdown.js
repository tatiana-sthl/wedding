import React, { useState, useEffect } from 'react';
import styles from '../../app/page.module.css';


function Countdown() {
  // Date cible (7 septembre 2024)
  const targetDate = new Date('2024-09-07T00:00:00');

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté.
    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      <div className={styles.countdown}>
        <div>
          <span className={styles.number}>{timeRemaining.days}</span>
          <span className={styles.textCountdown}>Jours</span>
        </div>
        <div>
          <span className={styles.number}>{timeRemaining.hours}</span>
          <span className={styles.textCountdown}>Heures</span>
        </div>
        <div>
          <span className={styles.number}>{timeRemaining.minutes}</span>
          <span className={styles.textCountdown}>Minutes</span>
        </div>
        <div>
          <span className={styles.number}>{timeRemaining.seconds}</span>
          <span className={styles.textCountdown}>Secondes</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
