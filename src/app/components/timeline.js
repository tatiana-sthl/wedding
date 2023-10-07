import styles from '../page.module.css';
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {

  return (
    

    <VerticalTimeline
      lineColor='rgb(109, 158, 130, 0.5)'
    >      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="15h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: 'rgb(109, 158, 130, 1)', color: '#fff' }}
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/eglise.jpg'
            alt="Landscape picture"
            width={110}
            height={150}
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
        iconStyle={{ background: 'rgb(109, 158, 130, 1)', color: '#fff' }}       
      >
        <div className={styles.divTimeline}>
          <Image
            src='/img/champagne.jpg'
            alt="vin d'honneur"
            width={120}
            height={100}
            className='iconTimeline'
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
        date="18h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: 'rgb(109, 158, 130, 1)', color: '#fff' }}
        
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="19h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: 'rgb(109, 158, 130, 1)', color: '#fff' }}
        
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
