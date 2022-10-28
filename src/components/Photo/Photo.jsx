import React from 'react';
import './Photo.css'

const Photo = ({ 
    src,
    flou,
    f
}) => {


    return (
        <img className={flou? 'flou' : ""} src={src} onClick={f}>
           
        </img>
    )
}

export default Photo;