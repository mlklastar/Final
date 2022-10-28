import React from 'react';

import Name from '../name/Name';
import Image from '../Image/Image';
import './Sport.css'


const Sport = ({ 
   name,
   link
}) => {


    return (
        <div className='sport'>
        <Image link={link}></Image>
        <Name name={name}></Name>
        </div>

    )
}

export default Sport;