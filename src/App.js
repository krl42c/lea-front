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
      <header className='header'>
        <h1>Linux Easy Admin</h1>
      </header>
      </div>






    )
}

export default App;
