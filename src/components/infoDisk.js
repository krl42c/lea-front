import React from 'react';
import GoBack from './atras';

export class InfoDisk extends React.Component {
  constructor(props) {
      super();
      this.state = {
        data : []
      };
  }
    componentDidMount() {
        fetch("/api/disk_folders")
          .then(res => res.json())
          .then(json => {
            this.setState({
                data : Object.values(json)
            });
          });
      }

    render() {
      return(
        <div data-aos="fade-right" class="div-tablas">
        <GoBack/>
        <table class="table text-white">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tamaño</th>
            </tr>
          </thead>
          <tbody>
           {this.state.data.map(carpeta => {
           return (
             <tr key={carpeta.Name}>
               <td>{carpeta.Name}</td>
               <td>{carpeta.Value}</td>

             </tr>
           );
         })}

          </tbody>
          </table>
        </div>
      )

    }
}
