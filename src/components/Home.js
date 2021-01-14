import React from 'react';
import { Bateria } from './Bateria';
import { CPU } from './CPU';
import { Disk } from './Disk';
import { Parallax } from 'react-parallax';
import { MemoriaRam } from './MemoriaRam';
import { Timer } from './timer';
export class Home extends React.Component {
    constructor(props) {
        super();
   }

   render() {
        return(
          <div className='div-body'>

            <header data-aos="zoom-out-down" className='header'>
              <h1>Linux Easy Admin</h1>
              <p>Bienvenido a Linux Easy Admin, tener el control de tu PC en Linux nunca había sido tan fácil</p>

            </header>

            <div className='div-cuerpo'>
                <Timer />
              <div className='div-graficas'>

                <div data-aos="flip-left" className='div-ram'>
                  <h2>Memoria Ram:</h2>
                  <MemoriaRam/>
                </div>

                <div data-aos="flip-up" className='div-bateria'>
                    <h2>Batería:</h2>
                    <Bateria/>
                </div>

                <div data-aos="flip-right" className='div-cpu'>
                    <h2>CPU:</h2>
                    <CPU/>
                </div>

                <div data-aos="flip-right" className='div-disk'>
                    <h2> Disco duro: </h2>
                    <Disk/>
                </div>

              </div>

            </div>
          </div>
        )
    }
}
