import styles from '../page.module.css';


const Infos = () => {
    
    return (
      <div>
        <h2 className={styles.h2Infos}>Pour répondre à la plupart de vos questions (enfin on l'espère) : </h2>      
          <ul className={styles.ulInfos}>
            <li>Il n'y a pas de dress code, la thématique étant "La simplicité comme ultime élégance", soyez juste beaux (allez, on fait un effort)</li>
            <li>Nous n'avons pas de liste de mariage, une urne sera à disposition pour le voyage de noce (si si, il y en aura un).</li>
            <li>Le lieu de la soirée est connu par Google Maps, donc laissez-vous guider ! On fera un cortège de voitures, le trajet en temps normal prend 45 minutes, comptez 1 heure pour celui-ci.</li>
          </ul>

        <h2 className={styles.h2Infos}>Et pour le logement, ça se passe comment ?</h2>      
      </div>
    );
  };
  
  export default Infos;