import React from 'react';
import image from './assets/logo.svg';
function Logo() {
    return (
        <div className="col-2">
            <img src={image}/>
        </div>
    );
};

export default Logo;