import React from 'react';
import './homepage.styles.scss'
import ProfilePictureComponent from "../../components/profile-picture/profile.picture.component";
import IntroductionComponent from "../../components/introduction/introduction.component";

const HomepageComponent = () => {
    return (
        <div>
            <ProfilePictureComponent className={'profile'}/>
            <IntroductionComponent className={'introduction'}/>
        </div>
    );
};

export default HomepageComponent;