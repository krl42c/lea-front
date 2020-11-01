import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Users } from './Users';
import { Heading } from './Heading';

function App() {
    return(
     <div >
        <Heading/>
        <Users/>
      </div>
    )
}

export default App;
