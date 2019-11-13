import React from 'react';
import './profile.picture.styles.scss'

const ProfilePictureComponent = () => {
    return (
        <div className={'profile'}>
            <img alt={"profile"} src={'./assets/profile.jpg'} />
            <h1>Joris Bruinsma</h1>
        </div>
    );
};

export default ProfilePictureComponent;