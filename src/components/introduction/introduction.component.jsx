import React from 'react';
import "./introduction.styles.scss";
import SocialComponent from "../social/social.component";

const IntroductionComponent = () => {
    return (
        <div className={'introduction'}>
            <div className="wrapper">
                <div className={"col-1"}>
                    <h2 className={'title'}>Over mij</h2>
                    <div className={'divider'}/>
                    <p> Waarschijnlijk heb je het al gezien, maar mijn naam is Joris Bruinsma. Ik ben een eerstejaars student Elektrotechniek aan de <a href={'https://www.hva.nl/'}>HvA.</a> Buiten zijn vind ik heerlijk. Kamperen en leuke kampen zijn mijn ding. Ook vind ik het ontdekken van nieuwe plekken op de wereld super leuk.
                        Ik ben niet zo van het feesten, maar gezellig samen zijn met vrienden doe ik graag. Techniek vind ik super interesant en ik kan hier niet genoeg van leren. Ik houd ook flink de laatste ontwikkelingen in de gaten.

                    </p>
                </div>
                <div>
                    <div className={'wrapper-column'}>
                        <div>
                            1
                        </div>
                        <div>
                            hello
                        </div>
                        <div>
                            <SocialComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionComponent;