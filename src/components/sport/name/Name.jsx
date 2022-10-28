import React, { Children } from 'react';
import './Name.css'

const Name = ({ 
    name
}) => {


    return (
        <h1 className='name'>
           {name}
        </h1>
    )
}

export default Name;