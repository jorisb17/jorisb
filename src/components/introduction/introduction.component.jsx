import React from 'react';
import "./introduction.styles.scss";

const IntroductionComponent = () => {
    return (
        <div className={'introduction'}>
            <div className="wrapper">
                <div>
                    <h2 className={'title'}>Over mij</h2>
                    <line/>
                    <p>Hello</p>
                </div>
                <div>
                    <div className={'wrapper-column'}>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionComponent;