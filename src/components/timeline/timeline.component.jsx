import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from "../Icons";

const TimelineComponent = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#a3be8c', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #a3be8c' }}
                date="2019 - heden"
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
                icon={<Icon name={"School"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">Student Elektrotechniek</h3>
                <h4 className="vertical-timeline-element-subtitle">Hogeschool van Amsterdam</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#88c0d0', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #88c0d0' }}
                date="2018 - heden"
                iconStyle={{ background: '#88c0d0', color: '#fff' }}
                icon={<Icon name={"Work"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">Instructeur</h3>
                <h4 className="vertical-timeline-element-subtitle">Klimbos Gooi-Eemland</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#a3be8c', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #a3be8c' }}
                date="2016 - 2018"
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
                icon={<Icon name={"School"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">Havo</h3>
                <h4 className="vertical-timeline-element-subtitle">Goois Lyceum, Bussum</h4>
                <p>
                    <ul>
                        <li>Profiel: Natuur & Techniek en Natuur & Gezondheid</li>
                        <li>Extra eindexamenvak: Muziek</li>
                        <li>Certificaat voor deelname aan de schoolmusical</li>
                        <li>Certificaat voor deelname aan U-Talent</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#a3be8c', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #a3be8c' }}
                date="2017 - 2018"
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
                icon={<Icon name={"School"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">PWS</h3>
                <h4 className="vertical-timeline-element-subtitle">Leerlijn programmeren ontwikkelen voor de basischool</h4>
                <p>
                    <ul>
                        <li>Programmeerles geven aan groep 8</li>
                        <li>Bedenken en uitwerken van een leerlijn</li>
                        <li>Constructief samenwerken met de basisschool</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#88c0d0', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #88c0d0' }}
                date="2016 - 2017"
                iconStyle={{ background: '#88c0d0', color: '#fff' }}
                icon={<Icon name={"Work"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">Kassamedewerker</h3>
                <h4 className="vertical-timeline-element-subtitle">Albert Heijn</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#a3be8c', color: '#eceff4' }}
                contentArrowStyle={{ borderRight: '7px solid  #a3be8c' }}
                date="2012 - 2016"
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
                icon={<Icon name={"School"} fill={"#ffff"}/>}
            >
                <h3 className="vertical-timeline-element-title">Mavo</h3>
                <h4 className="vertical-timeline-element-subtitle">De Fontein, Bussum</h4>
                <p>
                    <ul>
                        <li>Extra eindexamenvak: Wiskunde A Havo</li>
                        <li>Extra eindexamenvak: Duits</li>
                        <li>Voorzitter leerlingenraad</li>
                        <li>Profiel: Techniek</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default TimelineComponent;