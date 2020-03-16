import React from 'react';
import './profile.picture.styles.scss'
import ArrowDownComponent from "../Icons/arrow-down/arrow.down.component";
import SchoolIconComponent from "../Icons/school/school.icon.component";

const ProfilePictureComponent = () => {
    return (
        <div className={'profile'}>
            <img alt={"profile"} src={'./assets/profile.jpg'} />
            <h1>Joris Bruinsma</h1>
            <div style={{" height": "20px"}}>
                <ArrowDownComponent/>
            </div>
        </div>
    );
};

export default ProfilePictureComponent;