import React from 'react';
import './Bouton.css'

const Bouton = ({ 
   text,
   color,
   f,
   disable = false,
   loading
}) => {


    return (
        <button className="bouton" style={{backgroundColor:color}} onClick={f} disabled={disable} >
    {text} {loading? " en attente" : ""}
</button>
    )
}

export default Bouton;