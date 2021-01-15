import React from 'react';
import { Bateria } from './Bateria';
import { CPU } from './CPU';
import { Disk } from './Disk';
import { Parallax } from 'react-parallax';
import { MemoriaRam } from './MemoriaRam';
import { InfoRam } from './infoRam';
import { InfoBattery } from './infoBattery';
import { InfoCPU } from './infoCPU';
import { InfoDisk } from './infoDisk';

import { BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
export class Home extends React.Component {
    constructor(props) {
        super();
   }

   render() {
        return(
          <Router>
          <div className='div-body'>

            <header data-aos="zoom-out-down" className='header'>

              <div className='div-log'>
                <form data-aos="fade-left" class="m-3 p-3 border border-primary rounded text-white">
                <div class="form-group">
                    <label>Usuario</label>
                    <input class="form-control mb-2" placeholder="Usuario" id="usuario" name="usuario"/>
                    <label>Contraseña</label>
                    <input class="form-control mb-2" type="password" placeholder="Contraseña" id="password" name="password"/>
                    <label>Servidor</label>
                    <input class="form-control" placeholder="IP del Servidor" id="usuario" name="usuario"/>
                </div>
                  <button type="submit" class="form-control btn btn-primary w-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  </button>
                </form>
              </div>

              <h1>Linux Easy Admin</h1>
            </header>

            <div className='div-cuerpo'>



              <div className='div-graficas'>

                <div data-aos="flip-left" className='div-ram'>
                  <h2>Memoria Ram:</h2>
                  <MemoriaRam/>
                  <Link to="/infoRam">
                  <button class="btn btn-primary rounded-pill m-3 ">
                  Detalles
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </button>
                  </Link>
                </div>

                <div data-aos="flip-up" className='div-bateria'>
                    <h2>Batería:</h2>
                    <Bateria/>
                    <Link to="/infoBattery">
                    <button class="btn btn-primary rounded-pill m-3 ">
                    Detalles
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                    </Link>
                </div>

                <div data-aos="flip-up" className='div-cpu'>
                    <h2>CPU:</h2>
                    <CPU/>
                    <Link to="/infoCPU">
                    <button class="btn btn-primary rounded-pill m-3 " >
                    Detalles
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                    </Link>
                </div>

                <div data-aos="flip-right" className='div-disk'>
                    <h2> Disco duro: </h2>
                    <Disk/>
                    <Link to="/infoDisk">
                    <button class="btn btn-primary rounded-pill m-3 ">
                    Detalles
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ml-1" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                    </Link>
                </div>

              </div>

            </div>
            <Switch>
              <Route exact path="/infoRam" component={InfoRam} />
              <Route exact path="/infoCPU" component={InfoCPU} />
              <Route exact path="/infoBattery" component={InfoBattery} />
              <Route exact path="/infoDisk" component={InfoDisk} />
          </Switch>
          </div>
          </Router>
        )
    }
}
