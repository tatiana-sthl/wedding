import styles from '../../app/page.module.css';
import React, { useState } from 'react';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={`${styles.containermenu} ${styles.navcontainermenu}`}>
            <input className={styles.checkbox} type="checkbox" name="" id="" />
            <div className={styles.hamburgerlines}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>  
          <div className={styles.menuitems}>
            <li><a href="#">Tatiana & Baptiste</a></li>
            <li><a href="#timeline">Programme</a></li>
            <li><a href="#moreInfo">Infos pratiques</a></li>
            <li><a href="#form">RSVP</a></li>
          </div>
        </div>
      </div>


      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className='home'><a href="#">Tatiana & Baptiste</a></li>
          <li className='center'><a href="#timeline">Programme</a></li>
          <li className='upward'><a href="#moreInfo">Infos pratiques</a></li>
          <li className='forward'><a href="#form">RSVP</a></li>
        </ul>
      </nav>
    </>

      

  );
}

export default Menu;

