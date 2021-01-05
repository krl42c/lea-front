import header from './images/header.png';
import fondo1 from './images/fondo1.png';
import logo from './images/logo.svg';
import './css/App.css';
import { Ram } from './components/Ram';
import { MemoriaRam } from './components/MemoriaRam';
import { Bateria } from './components/Bateria';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import { Heading } from './components/Heading';


function App() {
    return(
      <div className='div-body'>
      <Heading/>
      <Parallax blur={{ min: -15, max: 15 }} bgImage={header}>
      <header className='header'>
        <h1>Linux Easy Admin</h1>
        <p>Bienvenido a Linux Easy Admin, tener el control de tu PC en Linux nunca había sido tan fácil</p>

      </header>
      </Parallax>
      <Parallax bgImage={fondo1}>
      <div className='div-cuerpo'>

        <div className='div-graficas'>

          <div className='div-ram'>
            <h2>Memoria Ram:</h2>
            <MemoriaRam/>
          </div>

          <div className='div-bateria'>
              <h2>Batería:</h2>
              <Bateria/>
          </div>

        </div>

      </div>
      </Parallax>

      </div>






    )
}

export default App;
