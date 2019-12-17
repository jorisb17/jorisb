import React from 'react';
import './homepage.styles.scss'
import ProfilePictureComponent from "../../components/profile-picture/profile.picture.component";
import IntroductionComponent from "../../components/introduction/introduction.component";

const HomepageComponent = () => {
    return (
        <div>
            <ProfilePictureComponent className={'profile'}/>
            <p><a href={"#intro"}>intro</a></p>
            <IntroductionComponent className={'introduction'} id={"#intro"}/>
        </div>
    );
};

export default HomepageComponent;