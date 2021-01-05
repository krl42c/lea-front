

import logo from './images/logo.svg';
import './css/App.css';
import { Ram } from './components/Ram';
import { MemoriaRam } from './components/MemoriaRam';
import { Bateria } from './components/Bateria';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import { Heading } from './components/Heading';

import AOS from 'aos';

function App() {
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    return(
      <div className='div-body bg-dark'>
        <Heading/>

      </div>






    )
}

export default App;
