import React, { Children } from 'react';
import './TitlePage.css'

const TitlePage = ({ 
    title
}) => {


    return (
        <h1 className='TitlePage'>
           {title}
        </h1>
    )
}

export default TitlePage;