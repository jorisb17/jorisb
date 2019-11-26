import React from 'react';
import './home.ervaring.styles.scss';
import {Link} from "react-router-dom";

const HomeErvaringComponent = () => {
    return (
        <div className={'home-ervaring'}>
            <div className={'title'}>
                <h2>Ervaring</h2>
            </div>
            <p>Wil je weten welke vooropleidingen ik gehad heb en wat voor werkervaring ik heb?
                Neem dan eens een kijkje op de <Link to={"/ervaring"}>mijn ervaring</Link> pagina</p>
        </div>
    );
};

export default HomeErvaringComponent;