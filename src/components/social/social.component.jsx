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
                        <div className={"container-git"}>
                            <img src={"./assets/GitHub.png"} width={'40px'} height={'auto'} alt={"Github-Logo"}/>
                            <div className={'username'}>Jorisb17</div>
                        </div>
                    </a>
                    <a href={'https://www.linkedin.com/in/joris-bruinsma-11978179/'}>
                        <div className={'container-linked'}>
                            <img alt="LinkedIn Logo" src={'./assets/LI.png'} width={"40px"} height={"auto"}/>
                            <div className={'username'}>Jorisb17</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialComponent;