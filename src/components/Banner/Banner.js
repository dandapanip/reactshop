import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = (props) => {
    return (
        <>
            <div className="sub-banner-section">
                <img className="d-block w-100"
                            src="https://dummyimage.com/300x400/000/fff"
                            alt="Sub Banners"
                            />
                <div className="sub-banner-img-content">
                    <p>{props.bannerTitle}</p>
                    <Button>{props.bannerButton}</Button>
                </div>                
            </div>        
        </>
    )
}

export default Banner;