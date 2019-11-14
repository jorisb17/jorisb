import React from 'react';
import './social.styles.scss'

const SocialComponent = () => {
    return (
        <div className={'social'}>
            <ul style={{"list-style-type": "none"}}>
                <li>
                    <div id={'container'}>
                        <div className={'username'}>Jorisb17</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SocialComponent;