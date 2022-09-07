import React from 'react';
import '../hojas-de-estilo/Header.css';

function Header(props){
  return (
    <header className='header'>
      <img className='header__logo' src="/imagenes/Logo-RandM.png" alt='Rick and Morty' />      
      <div>
        <img className='icono__campana' src="/imagenes/Icono-campana.png" alt='Rick and Morty' />
        <img className='icono__home' src="/imagenes/Home.png" alt='Rick and Morty' />
      </div>
    </header>
  );
}

export default Header;