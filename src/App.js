import React, { useEffect, useState } from 'react';
import './App.css';
import './hojas-de-estilo/Navbar.css';
import './hojas-de-estilo/Tabla.css';
import Header from './componentes/Header.js';
import Navbar from './componentes/Navbar.js';
import Tabla from './componentes/Tabla.js';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const [live, setLive] = useState([])
  const [infoLive, setInfoLive] = useState([])

  const [dead, setDead] = useState([])
  const [infoDead, setInfoDead] = useState([])

  const url = "https://rickandmortyapi.com/api/character";
  const urlLive = 'https://rickandmortyapi.com/api/character/?status=alive'
  const urlDead = 'https://rickandmortyapi.com/api/character/?status=dead'

  
  const data = (url) => {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setCharacters(datos.results);
      setInfo(datos.info);
    })
    .catch(error => console.log(error))
  };

  const dataLive = (urlLive) => {
    fetch(urlLive)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setLive(datos.results);
      setInfoLive(datos.info);
    })
    .catch(error => console.log(error))
  };

  const dataDead = (urlDead) => {
    fetch(urlDead)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setDead(datos.results);
      setInfoDead(datos.info);
    })
    .catch(error => console.log(error))
  };
 

  useEffect(() => {
    data(url);
    dataLive(urlLive);
    dataDead(urlDead);
  }, [])

  return (
    <>
      <Header />
      <Navbar info={info} live={live} infoLive={infoLive} dead={dead} infoDead={infoDead}/>
      <Tabla personajes = {characters}/>
    </>
  );
}

export default App;
