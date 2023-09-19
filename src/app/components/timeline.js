import React, { useEffect } from 'react';
import styles from '../page.module.css';

const Timeline = () => {
  const threshold = 0.1;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > threshold) {
        entry.target.classList.remove('reveal');
        observer.unobserve(entry.target);
      }
    });
  };

  document.documentElement.classList.add('reveal-loaded');

  window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => {
      observer.observe(target);
    });
  });

  return (
    <div className={styles.timeline}>
    <div className={styles.outer}>
      <div className={`${styles.card} reveal`}>
        <div className={styles.info}>
          <h3 className={styles.title}>Rdv à l'Eglise</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card} reveal`}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card} reveal`}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card} reveal`}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card} reveal`}>
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
