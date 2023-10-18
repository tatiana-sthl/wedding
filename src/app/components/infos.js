import styles from '../page.module.css';


const Infos = () => {
    
    return (
      <div>
        <h2 className={styles.h2Infos}>Pour répondre à la plupart de vos questions (enfin on l'espère) : </h2>      
          <ul className={styles.ulInfos}>
            <li>Il n'y a pas de dress code, la thématique étant "La simplicité comme ultime élégance", soyez juste beaux (allez, on fait un effort)</li>
            <li>Nous n'avons pas de liste de mariage, une urne sera à disposition pour le voyage de noce (si si, il y en aura un).</li>
            <li>Le lieu de la soirée est connu par Google Maps, donc laissez-vous guider ! On fera un cortège de voitures, le trajet en temps normal prend 45 minutes, comptez 1 heure pour celui-ci.</li>
            <li>Les enfants sont les bienvenus, une baby-sitter (ou deux en fonction du nombre total d'enfants) sera prévue pour la soirée.</li>
          </ul>

        <h2 className={styles.h2Infos}>Et pour le logement, ça se passe comment ?</h2>
        <p className={styles.ulInfos}>Nous sommes en Haute-Marne, ce n'est donc pas la folie en terme de logements à louer MAIS l'avantage c'est que ce sont généralement de très grandes maisons pour beaucoup d'invités.</p>
        <p className={styles.ulInfos}>Nous avons essayé de répertorier les logements à proximité (entendez à moins de 10 minutes en voiture). Les autres logements sont plus éloignés, pensez à réserver rapidement ceux sur la carte. Merci d'avance pour le sacrifice des SAM. </p>
        <iframe className={styles.iframe} src="https://www.google.com/maps/d/embed?mid=1yGgdbOFtIHCObumcn4GK_3Z43b0NpS8&ehbc=2E312F&noprof=1" width="820" height="480"></iframe>
        <h2 className={styles.h2Infos}>On parle du lendemain :</h2>      
        <p className={styles.ulInfos}>Pour ceux qui le veulent, nous serions heureux de vous revoir le lendemain à partir de 11h (avant nous ne serons pas apte). Tout se fera à la bonne franquette (comprenez buffet de restes), et nous prévoyons des compétitions acharnées de Molky et de pétanque. Alors venez, pour profiter encore un peu.</p>

      </div>
    );
  };
  
  export default Infos;