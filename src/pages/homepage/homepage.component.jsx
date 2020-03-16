import React from 'react';
import './homepage.styles.scss'
import ProfilePictureComponent from "../../components/profile-picture/profile.picture.component";
import IntroductionComponent from "../../components/introduction/introduction.component";
import NavbarComponent from "../../components/navbar/navbar.component";

const HomepageComponent = () => {
    return (
        <div>
            <NavbarComponent/>
            <ProfilePictureComponent className={'profile'}/>
            <IntroductionComponent/>
        </div>
    );
};

export default HomepageComponent;