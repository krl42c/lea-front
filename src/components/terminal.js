import React from 'react';
import { XTerm } from 'xterm-for-react';

export class Terminal extends React.Component {
    render() {
        return(
          <div className='div-terminal'>
          <h3>Consola</h3>
          <XTerm />
          </div>
        )

    }


}
