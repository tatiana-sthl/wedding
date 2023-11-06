'use client';
import Timeline  from './components/timeline';
import Infos  from './components/infos';
import Rsvp  from './components/rsvp';
import Menu from './components/menu';

import styles from './page.module.css';
import './components/countdown.js';
import Image from 'next/image';
import Countdown from './components/countdown.js';


export default function Home() {

  return (
    <main className={styles.main}>
      <Menu />
      <div id='presentation' className={styles.textePresentation}>
        <h1 className={styles.dateH1}>Samedi 7 septembre 2024</h1>
        <Countdown />
        <p className={styles.pPresentation}>
          Enfin ! Après 10 ans de vie commune (12 quand nous serons à la date du mariage), nous allons nous marier et nous n’avons qu’une hâte, pouvoir le fêter avec vous. 
          Pour cela, vous trouverez sur ce site toutes les informations nécessaire, et surtout le formulaire de confirmation de votre présence.
          Et en attendant le grand jour, un simple merci de faire partie de nos vies.
        </p>
        <Image
            src='/img/tetb1.jpg'
            alt="tetb"
            width={820}
            height={220}
            className={styles.imgFront}
          />
      </div>
      <div id='timeline' className={styles.presentation}>
        <h2 className={styles.h2}>Tout commence par...</h2>
        <Timeline />
      </div>
      <div id='moreInfo' className={styles.textePresentation}>
        <h2 className={styles.h2Right}>Vous souhaitez en savoir plus ?</h2>
        <Infos />
      </div>
      <div id='form' className={styles.presentation}>
        <h2 className={styles.h2}>Alors, vous venez ?</h2>
        <Rsvp />
      </div>
      <div className={styles.footer}>
        <p>&copy;2023 - Tatiana&Baptiste</p>
      </div>
    </main>
  )
}
