import React from 'react'

const Navbar = ({live, infoLive, info, infoDead}) => {

  return (
    <>
    <div className="titulo">
      <img className="titulo__icon--camara" src="/imagenes/camera-movie.png" alt="Icono de una camara" />
      <h1 className="titulo__text">Personajes</h1>
    </div>
    <div className="personajes">
      <div className="personajes__total">
        <p className="personajes__total--text">Total de personajes</p>
        <p className="personajes__total--numero">{info.count}</p>
      </div>
      <div className="personajes__estado">
        <div className="personajes__estado--vivos">
          <img src="/imagenes/Icono-vivo.png" alt="Icono Ok" className="personajes__estado--vivos-icon"/>
          <p className="personajes__estado--vivos-text">Personajes vivos</p>
          <p className="personajes__estado--vivos-numero">{infoLive.count}</p>
        </div>
        <p className="separador">|</p>
        <div className="personajes__estado--muertos">
          <img src="/imagenes/Icono-muerto.png" alt="Icono error" className="personajes__estado--muertos-icon"/>
          <p className="personajes__estado--muertos-text">Personajes muertos</p>
          <p className="personajes__estado--muertos-numero">{infoDead.count}</p>
        </div>
      </div>
      <div className="personajes__buscador">
        <img src="/imagenes/Icono-busqueda.png" alt="Icono de lupa" className="personajes__buscador--lupa"/>
        <input type="text" placeholder="Buscar" className="personajes__buscador--input"/>
      </div>
    </div>
    </>
  );
}

export default Navbar;