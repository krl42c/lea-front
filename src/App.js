import logo from './images/logo.svg';
import './css/App.css';
import { Ram } from './components/Ram';
import { useEffect, useState } from 'react';

import { Heading } from './components/Heading';


function App() {
    return(
      <div className='div-body'>
      <Heading/>
      <div className='div-cuerpo'>
        <div className='div-ram'>
          <h3>Memoria Ram:</h3>
          <Ram/>
        </div>
      </div>
      </div>






    )
}

export default App;
