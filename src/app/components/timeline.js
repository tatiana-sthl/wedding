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
        <h3 className="vertical-timeline-element-title">Eglise</h3>
        <h4 className="vertical-timeline-element-subtitle">Chauffour-lès-Bailly</h4>
        <p>
          Rendez-vous à l'Eglise pour la cérémonie religieuse
        </p>
        <Image
          src='/img/eglise.jpg'
          alt="Landscape picture"
          width={800}
          height={500}
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="16h"
        dateClassName={styles.verticaltimelineelementdate}
        iconStyle={{ background: 'rgb(109, 158, 130, 1)', color: '#fff' }}
        
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
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
