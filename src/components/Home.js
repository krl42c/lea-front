import React from 'react';
import { Bateria } from './Bateria';
import { Parallax } from 'react-parallax';
import { Ram } from './Ram';
import { MemoriaRam } from './MemoriaRam';


export class Home extends React.Component {
    constructor(props) {
        super();
   }

   render() {
        return(
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
        )
    }
}
