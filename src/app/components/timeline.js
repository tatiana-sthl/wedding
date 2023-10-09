import styles from '../page.module.css';
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {

  return (
    

    <VerticalTimeline
      lineColor='#d9cdb7'
    >      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: '#d9cdb7', color: '#fff' }}
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/eglise.jpg'
            alt="Landscape picture"
            width={110}
            height={140}
          />
          <div className={styles.divTimeline2}> 
            <h3 className="vertical-timeline-element-title">Eglise</h3>
            <h4 className="vertical-timeline-element-subtitle">Chauffour-lès-Bailly</h4>
            <p className={styles.pTimeline}>
              Rendez-vous pour la cérémonie religieuse
            </p>
          </div>         
        </div>     
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="16h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: '#d9cdb7', color: '#fff' }}       
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/champagne.jpg'
            alt="vin d'honneur"
            width={120}
            height={100}
          />
          <div className={styles.divTimeline2}> 
            <h3 className="vertical-timeline-element-title">Vin d'honneur</h3>
            <h4 className="vertical-timeline-element-subtitle">43 rue Principale Chauffour-lès-Bailly</h4>
            <p className={styles.pTimeline}>
              Pour se remettre de nos émotions, on se retrouve chez nous
            </p>
          </div>         
        </div>    
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="18h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: '#d9cdb7', color: '#fff' }}       
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/trajet.jpg'
            alt="trajet"
            width={140}
            height={120}
          />
          <div className={styles.divTimeline2}> 
            <h3 className="vertical-timeline-element-title">Départ</h3>
            <h4 className="vertical-timeline-element-subtitle">Ferme de Varencey 52120 Laferté s/ Aube</h4>
            <p className={styles.pTimeline}>
              En route pour le repas... et la soirée !
            </p>
          </div>         
        </div>    
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="19h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: '#d9cdb7', color: '#fff' }}       
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/repas.jpg'
            alt="vin d'honneur"
            width={120}
            height={100}
          />
          <div className={styles.divTimeline2}> 
            <h3 className="vertical-timeline-element-title">Repas et Soirée</h3>
            <h4 className="vertical-timeline-element-subtitle">Ferme de Varencey</h4>
            <p className={styles.pTimeline}>
              Ne reste plus qu'à profiter du repas et de la longue nuit de festivités
            </p>
          </div>         
        </div>    
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
