'use client';

import styles from './page.module.css';
import { useEffect } from 'react';
import './countdown.js';

export default function Home() {

 
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className='home'><a href="#">Tatiana & Baptiste</a></li>
          <li className='center'><a href="#">Programme</a></li>
          <li className='upward'><a href="#">Infos pratiques</a></li>
          <li className='forward'><a href="#">RSVP</a></li>
        </ul>
      </nav>
      
      <div className={styles.textePresentation}>
        <h1 className={styles.h1}>Samedi 7 septembre 2024</h1>
        <p className={styles.p}>
          Enfin ! Après 10 ans de vie commune (12 quand nous serons à la date du mariage), nous allons nous marier et nous n’avons qu’une hâte, pouvoir le fêter avec vous. 
          Pour cela, vous trouverez sur ce site toutes les informations nécessaire, et surtout le formulaire de confirmation de votre présence.
          Et en attendant le grand jour, un simple merci de faire partie de nos vies.
        </p>
      </div>
      <div className={styles.presentation}>
        <h2 className={styles.h2}>Tout commence par...</h2>
        <div className={styles.timeline}>
          <div className={styles.outer}>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.title}>Title 1</h3>
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
      </div>
    </main>
  )
}
