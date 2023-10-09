'use client';
import Timeline  from './components/timeline';
import Logements  from './components/logements';
import Rsvp  from './components/rsvp';

import styles from './page.module.css';
import './components/countdown.js';
import Image from 'next/image'


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
        <h1 className={styles.dateH1}>Samedi 7 septembre 2024</h1>
        <p className={styles.pPresentation}>
          Enfin ! Après 10 ans de vie commune (12 quand nous serons à la date du mariage), nous allons nous marier et nous n’avons qu’une hâte, pouvoir le fêter avec vous. 
          Pour cela, vous trouverez sur ce site toutes les informations nécessaire, et surtout le formulaire de confirmation de votre présence.
          Et en attendant le grand jour, un simple merci de faire partie de nos vies.
        </p>
        <Image
            src='/img/tetb1.jpg'
            alt="tetb"
            width={840}
            height={220}
            className={styles.imgFront}
          />
      </div>
      <div className={styles.presentation}>
        <h2 className={styles.h2}>Tout commence par...</h2>
        <Timeline />
      </div>
      <div className={styles.textePresentation}>
        <h2 className={styles.h2Right}>Et pour se loger ?</h2>
        <Logements />
      </div>
      <div className={styles.presentation}>
        <h2 className={styles.h2}>Alors, vous venez ?</h2>
        <Rsvp />
      </div>
    </main>
  )
}
