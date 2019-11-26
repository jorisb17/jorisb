import React from 'react';
import './not.found.styles.scss'
import {Link} from "react-router-dom";

const NotFoundComponent = () => {
    return (
        <div className="wrap-404">
            <h1>Error 404: Page not found</h1>
            <p>Country road, take me <Link to={'/'}>home.</Link></p>
            <p>To the place, I belong!</p>
            <img alt="country road" src={"./assets/country_road.jpg"}/>
        </div>
    );
};

export default NotFoundComponent;