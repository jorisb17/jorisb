import React, {useEffect} from 'react';
import "./gallery.styles.scss"


const GalleryComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"gallery"}>

        </div>
    );
};

export default GalleryComponent;