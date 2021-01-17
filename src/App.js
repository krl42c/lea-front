import './css/App.css';
import { Heading } from './components/Heading';
import { useEffect, useState } from 'react';

import AOS from 'aos';

function App() {
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    return(
      <div className='div-body text-white'>
        <Heading/>

      </div>






    )
}

export default App;
