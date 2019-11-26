import React from 'react';
import {Link} from "react-router-dom";
import "./reizen.component.scss"

const ReizenComponent = () => {
    return (
        <div className={'reizen'}>
            <div className={'title'}>
                <h2>Reizen</h2>
            </div>
            <p>Ik vind het ontdekken van nieuwe plekken op de wereld super! Ik deel de mooiste foto's van mijn reizen in de <Link to={"/galerij"}>galerij.</Link></p>
        </div>
    );
};

export default ReizenComponent;