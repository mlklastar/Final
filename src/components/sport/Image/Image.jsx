import React, { Children } from 'react';
import './Image.css'


const Image = ({ 
    link
}) => {


    return (
        <img className='image' src={link}>
        
        </img>
    )
}

export default Image;