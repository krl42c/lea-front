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

            </header>

            <div className='div-cuerpo'>

            <div className='div-log'>
              <form data-aos="fade-left" class="m-4 p-3 border border-primary rounded text-white">
              <div class="form-group p-3">
                  <label>Usuario</label>
                  <input class="form-control mb-2" placeholder="Usuario" id="usuario" name="usuario"/>
                  <label>Contraseña</label>
                  <input class="form-control mb-2" type="password" placeholder="Contraseña" id="password" name="password"/>
                  <label>Servidor</label>
                  <input class="form-control mb-2" placeholder="IP del Servidor" id="usuario" name="usuario"/>
              </div>
                <button type="submit" class="btn btn-primary ml-3 mr-3 mb-3">Confirmar</button>
              </form>
            </div>

              <div className='div-graficas'>

                <div data-aos="flip-left" className='div-ram'>
                  <h2>Memoria Ram:</h2>
                  <MemoriaRam/>
                </div>

                <div data-aos="flip-up" className='div-bateria'>
                    <h2>Batería:</h2>
                    <Bateria/>
                </div>

                <div data-aos="flip-up" className='div-cpu'>
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
