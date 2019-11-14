import React from 'react';
import './social.styles.scss'

const SocialComponent = () => {
    return (
        <div className={'social'}>
            <div className={'title'}>
                <h2>Social links</h2>
            </div>
            <ul style={{"list-style-type": "none"}}>
                <li>
                    <a href={'https://github.com/jorisb17'}>
                        <div className={'container-git'}>
                            <div className={'username'}>Jorisb17</div>
                        </div>
                    </a>
                    <a href={'https://github.com/jorisb17'}>
                        <div className={'container-linked'}>
                            <div className={'username'}>Jorisb17</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialComponent;