import React from 'react';
import './contact.styles.scss'

const ContactComponent = () => {
    return (
        <div className={'contact'}>
            <div className={'title'}>
                <h2>Contact</h2>
            </div>
            <p>Ben je na dit lezen enthausiast geworden en wil je contact met mij opnemen? Dit kan! Mail naar: <a href={"mailto:joris@jorisb.nl"}>joris@jorisb.nl</a></p>
        </div>
    );
};

export default ContactComponent;