import React from "react";

import School from './School';
import ArrowDown from './ArrowDown';
import Work from './Work';


const Icon = props => {
    switch (props.name) {
        case "ArrowDown":
            return <ArrowDown {...props}/>;
        case "School":
            return <School {...props}/>;
        case "Work":
            return <Work {...props}/>;
        default:
            return;
    }
};

export default Icon;