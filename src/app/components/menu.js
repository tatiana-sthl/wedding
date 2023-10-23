import styles from '../../app/page.module.css';
import React, { useState } from 'react';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.hamburgerButton}>
        &#9776; {/* Cela affiche le symbole hamburger (trois lignes) */}
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.ul}>
          <li className='home'><a href="#">Tatiana & Baptiste</a></li>
          <li className='center'><a href="#timeline">Programme</a></li>
          <li className='upward'><a href="#moreInfo">Infos pratiques</a></li>
          <li className='forward'><a href="#form">RSVP</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

