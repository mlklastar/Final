import React from 'react';
import './Stat.css'

const Stat = ({ 
   list
}) => {


    return (
        <>
           <div> {list.length > 0 && list[0].player.name} </div>
           <div>Age : {list.length > 0 && list[0].player.age} </div>
           <div>Pays : {list.length > 0 && list[0].player.flag} </div>
           <div>Taille : {list.length > 0 && list[0].player.height}</div>
           <div>Position :  {list.length > 0 && list[0].player.position_name}</div>
        </>
    )
}

export default Stat;