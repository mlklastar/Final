
import './Team.css';
import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useParams} from 'react-router-dom';
import TitlePage from '../../components/TitlePage/TitlePage';
import Header from '../../components/header/header/Header';

function Team() {

  const {sport}  = useParams();

  const [list, setList] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88ca461f96msh3b38f9942b84dacp18080ejsnd9596a7c45c6',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };
  
    const team = async () => {
      const response = await fetch('https://sportscore1.p.rapidapi.com/sports/' + sport + '/teams?page=1', options);
      const list = await response.json();
      setList(list.data);
    }

    useEffect(() => {
      team();
    }, [])

  return (
    <div className="App">

<Link to={'/'} style={{ textDecoration: 'none' }}>
<Header></Header>
</Link>
      
      <TitlePage title="Choisissez une équipe"></TitlePage>

    {list.map((element,i) => <li key={element.id}>
    <Link to={'/Players/'+element.id} style={{ textDecoration: 'none' }}>{element.name}</Link>
      </li>)}
      
    </div>
  );
}

export default Team;
