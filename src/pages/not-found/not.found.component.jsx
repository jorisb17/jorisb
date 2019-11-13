import React from 'react';
import './not.found.styles.scss'
import {Link} from "react-router-dom";

const NotFoundComponent = () => {
    return (
        <div className="wrap-404">
            <div className="label">Error</div>
            <div className="numbers">
                <div className="number">
                    <div className="four"/>
                </div>
                <div className="number">
                    <div className="zero"><span/></div>
                </div>
                <div className="number">
                    <div className="four last"/>
                </div>
            </div>
            <div className="text">
                <p>Looks like you got lost... Or I am trying to confuse you... </p>
                <p> Let me bring you <Link to={'/'}>home</Link>.</p>
            </div>
            <div className="sleep-walker">
                <div className="man">
                    <div className="head"/>
                    <div className="torso">
                        <div className="arm-a"/>
                        <div className="arm-b"/>
                    </div>
                    <div className="legs">
                        <div className="leg-a"/>
                        <div className="leg-b"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundComponent;