import React from 'react';

export class InfoRam extends React.Component {
  constructor(props) {
      super();
      this.state = {
        data : []
      };
  }
    componentDidMount() {
        fetch("/api/ram/process")
          .then(res => res.json())
          .then(json => {
            this.setState({
                data : Object.values(json)
            });
          });
      }

    render() {
        return(
          <div className="div-tablas">
          <table class="table text-white">
            <thead>
              <tr>
                <th scope="col">Proceso</th>
                <th scope="col">Uso de la Ram</th>
              </tr>
            </thead>
            <tbody>
             {this.state.data.map(Proceso => {
             return (
               <tr key={Proceso.Name}>
                 <td>{Proceso.Name}</td>
                 <td>{Proceso.Value}</td>

               </tr>
             );
           })}

            </tbody>
            </table>
          </div>
        )
    }
}
