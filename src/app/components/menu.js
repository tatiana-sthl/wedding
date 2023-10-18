import styles from '../../app/page.module.css';

function Menu() {

  return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className='home'><a href="#">Tatiana & Baptiste</a></li>
          <li className='center'><a href="#timeline">Programme</a></li>
          <li className='upward'><a href="#moreInfo">Infos pratiques</a></li>
          <li className='forward'><a href="#form">RSVP</a></li>
        </ul>
      </nav>
  );
}

export default Menu;
