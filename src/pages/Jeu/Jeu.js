
import './Jeu.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useParams, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header/Header';
import Photo from '../../components/Photo/Photo';
import Bouton from '../../components/Bouton/Bouton';
import Sport from '../../components/sport/sport/Sport';
import TitlePage from '../../components/TitlePage/TitlePage';
import Formulaire from '../../components/formulaire/Formulaire';

function Jeu() {

  const [list, setList] = useState([]);

  let {statistics}  = useParams();

  let [flou,setFlou] = useState(true);

  const [s,setS] = useState("Envoyer");

  let name;

  const navigate = useNavigate();
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88ca461f96msh3b38f9942b84dacp18080ejsnd9596a7c45c6',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    jeu();
  }, [])

  
  const jeu = async () => {
    console.log(statistics);
    const response = await fetch('https://sportscore1.p.rapidapi.com/players/' + statistics + '/transfers?page=1', options);
    const list = await response.json();
    setList(list.data);
    console.log(list);
  }

 

    const submit = (event)=>{
      setS("En attente");
      const n = Math.floor((Math.random() * 4) +1);
      if(list[1].player.name == name){
        
        alert("bravo");
        navigate('/Jeu/'+n);
      }
      else{
        alert("t'es nul");
        navigate('/Jeu/'+n);
      }
    }

    const deflouter = () =>{
      setFlou(false);
    }

  return (
    <div className="App">
      
      <Link to={'/'} style={{ textDecoration: 'none' }}>
<Header></Header>
</Link>

    <TitlePage title="Quiz"></TitlePage>

    

 <p>I'm a {list.length > 0 && list[1].player.flag} player, Im playing in {list.length > 0 && list[1].player.position_name}, I'm {list.length > 0 && list[1].player.age} </p>

 
 <Photo src={list.length > 0 && list[1].player.photo} flou={flou} f={deflouter}></Photo>

<Formulaire o={(e) => name = e.target.value} f={submit} name={name} s={s}></Formulaire> 
      
    </div>
  );
}

export default Jeu;
