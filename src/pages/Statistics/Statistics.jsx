
import './Statistics.css';
import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useParams} from 'react-router-dom';
import TitlePage from '../../components/TitlePage/TitlePage';
import Header from '../../components/header/header/Header';
import Bouton from '../../components/Bouton/Bouton';
import { render } from '@testing-library/react';
import Stat from '../../components/stat/Stat';

function Statistics() {

  const {statistics}  = useParams();

  const [list, setList] = useState([]);

  let [disable,setDisable] = useState(true);

  let [loading,setLoading] = useState(false);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88ca461f96msh3b38f9942b84dacp18080ejsnd9596a7c45c6',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };

    const Transfert = async () => {
      setLoading(true);
      const response = await fetch('https://sportscore1.p.rapidapi.com/players/' + statistics + '/transfers?page=1', options);
      const list = await response.json();
      setList(list.data);
      setLoading(false);
      setDisable(!disable);
    }

    const m = [
      {
        "team_from":
          {"name":"upec"}
        ,
          "team_to":
            {"name":"sorbonne"}
          ,
          "date_at":"11 octobre 2057",
          "cost":"900 Milliards",
          "player" : 
            {"age":"22 ans",
            "flag":"France",
            "height" : "2m50",
            "position_name":"M1 Miage - avant dernier rang",
            "name" :"Malik"},
          
        },
      
    ];

    const malik = () => {
      setLoading(true);
      setList(m);
      setLoading(false);
      setDisable(!disable);
    }

    useEffect(() => {
      Transfert();
    }, [])
    

  return (
    <div className="App">

    <Link to={'/'} style={{ textDecoration: 'none' }}>
      <Header></Header>
    </Link>

    <TitlePage title="Statistics du joueur"></TitlePage>

    <Bouton text="Malik" color="red" f={malik} disable={disable} loading={loading}></Bouton>
    <Bouton text="Joueur" color="yellow" f={Transfert} disable={!disable} loading={loading}></Bouton>
      

      <div className='transfert' id='transfert'>

      <Stat list={list}></Stat>

           ___________________________________

        {list.map((element,i) =>
        <div key={i}>
          
           De {element.team_from.name} à {element.team_to.name} le {element.date_at} pour {element.cost}
          
        </div>)}
      </div>

     
      
    </div>
  );

}

export default Statistics;
