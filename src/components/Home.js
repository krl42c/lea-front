import React from 'react';
import { Bateria } from './Bateria';
import { CPU } from './CPU';
import { Parallax } from 'react-parallax';
import { MemoriaRam } from './MemoriaRam';
import fondo1 from '../images/fondo1.png';
import header from '../images/header.png';
export class Home extends React.Component {
    constructor(props) {
        super();
   }

   render() {
        return(
          <div className='div-body'>
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

              <div className='div-cpu'>
                  <h2>CPU:</h2>
                  <CPU/>
              </div>

            </div>

          </div>
          </Parallax>
          </div>
        )
    }
}
