'use client';

import styles from './page.module.css';
import { useEffect } from 'react';
import './countdown.js';

export default function Home() {

 
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><a href="#">Tatiana & Baptiste</a></li>
          <li className='center'><a href="#">Programme</a></li>
          <li className='upward'><a href="#">Infos pratiques</a></li>
          <li className='forward'><a href="#">RSVP</a></li>
        </ul>
      </nav>
      
      <div>
        <div>
          <h1>Samedi 7 septembre 2024</h1>
          <p>
            Enfin ! Après 10 ans de vie commune (12 quand nous serons à la date du mariage), nous allons nous marier et nous n’avons qu’une hâte, pouvoir le fêter avec vous !
            Pour cela, vous trouverez sur ce site toutes les informations nécessaire, et surtout le formulaire de confirmation de votre présence.
            Garder précieusement le lien de ce site, car c’est ici que vous pourrez retrouver les photos prises lors du week-end, et vous pourrez même partager les vôtres.
            Et en attendant le grand jour, un simple merci de faire partie de nos vies.
          </p>
          <h2>Décompte</h2>
          <p id='countdown'></p>
        </div>

      </div>
    </main>
  )
}
