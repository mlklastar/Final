
import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header/Header';
import Sport from '../../components/sport/sport/Sport';
import TitlePage from '../../components/TitlePage/TitlePage';
import Bouton from '../../components/Bouton/Bouton';

function App() {

  const F = ["https://img.freepik.com/vecteurs-premium/football-football-logo-vecteur_7888-111.jpg?w=2000",
"https://media.istockphoto.com/photos/tennis-ball-with-racket-on-the-tennis-court-sport-recreation-concept-picture-id1093339590?k=20&m=1093339590&s=170667a&w=0&h=s8A1B1Pzf4xJUD7ND92vmCWG9EIedypnl8exxog_W3w=",
"https://pictures.betaseries.com/fonds/poster/92aca617983b8af945a181b40c74318d.jpg",
"https://img.lemde.fr/2021/12/19/0/0/3766/2512/664/0/75/0/22d6d38_5221622-01-07.jpg",
"https://www.manga-news.com/public/images/dvd/.haikyu-s4-anime-to-the-top-visual-2_m.jpg",
"https://static.vecteezy.com/ti/vecteur-libre/t2/2219040-handball-player-on-white-background-vector-illustration-vectoriel.jpg"]
  const [list, setList] = useState([]);

  let [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88ca461f96msh3b38f9942b84dacp18080ejsnd9596a7c45c6',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };
  
    const sport = async () => {
      setLoading(true);
      const response = await fetch('https://sportscore1.p.rapidapi.com/sports', options);
      const list = await response.json();
      setList(list.data);
      setLoading(false);
    }

    const jouer = () =>{
      const n = Math.floor((Math.random() * 4) +1);
      navigate('/Jeu/'+n);
    }

    useEffect(() => {
      sport();
    }, [])

  return (
    <div className="App">
      
      <Link to={'/'} style={{ textDecoration: 'none' }}>
<Header></Header>
</Link>

    <TitlePage title="Choisissez un sport"></TitlePage>

    

    {list.map((element,i) => <div key={element.id}>
    
      <Link to={'/Team/'+element.id} style={{ textDecoration: 'none' }}>

      <Sport name={element.name} link={F[i]}></Sport>
      

      </Link>
      </div>)}
      <Bouton text="Jouer" color="green" f={jouer} disable={false} loading={loading}></Bouton>
    </div>
  );
}

export default App;
