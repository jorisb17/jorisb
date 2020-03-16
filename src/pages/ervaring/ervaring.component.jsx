import React from 'react';
import "./ervaring.styles.scss"
import TimelineComponent from "../../components/timeline/timeline.component";
import NavbarComponent from "../../components/navbar/navbar.component";

class ErvaringComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render(){
        return (
            <div className={"ervaring"}>
                <NavbarComponent/>
                <TimelineComponent/>
                <div style={{"height": "20px"}}/>
            </div>
        );
    }
}

export default ErvaringComponent;