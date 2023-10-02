import styles from '../page.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const Timeline = () => {

  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });

  // Utilisez useRef pour accéder au DOM
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const cardRef4 = useRef();
  const cardRef5 = useRef();

  useEffect(() => {
    // Fonction pour ajouter la classe 'show' avec un délai
    const addShowClassWithDelay = (ref) => {
      console.log('Adding show class with delay');
      setTimeout(() => {
        ref.current.classList.add('show');
      }, 100); // Délai en millisecondes
    };

    if (inView1) {
      addShowClassWithDelay(cardRef1);
    }
    if (inView2) {
      addShowClassWithDelay(cardRef2);
    }
    if (inView3) {
      addShowClassWithDelay(cardRef3);
    }
    if (inView4) {
      addShowClassWithDelay(cardRef4);
    }
    if (inView5) {
      addShowClassWithDelay(cardRef5);
    }
  }, [inView1, inView2, inView3, inView4, inView5]);



  return (
    <section className={styles.timeline}>
    <div className={styles.outer}>
      <div className={`${styles.card}`} ref={cardRef1}>
        <div className={styles.info}>
          <h3 className={styles.title}>Rdv à l'Eglise</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card}`} ref={cardRef2}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card}`} ref={cardRef3}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card}`} ref={cardRef4}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={`${styles.card}`} ref={cardRef5}>
        <div className={styles.info}>
          <h3 className={styles.title}>Title 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Timeline;
