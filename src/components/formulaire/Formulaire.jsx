import React from 'react';
import './Formulaire.css'

const Formulaire = ({ 
  name,
  o,
  f,
  s
}) => {


    return (
        <form onSubmit={f}>
  <label>
    Name: 
    <input type="text" name="name" value={name} onChange={o}/>
  </label>
  <input type="submit" value={s} />
</form>
    )
}

export default Formulaire;