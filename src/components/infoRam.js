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
          <div>
          <table class="table text-white">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Proceso</th>
                <th scope="col">Uso de la Ram</th>
                <th scope="col">Ruta</th>
                <th scope="col">Usuario</th>
              </tr>
            </thead>
            <tbody>
                {
                }
             {this.state.data.map(Proceso => <li>{Proceso.Name} :  {Proceso.Value} </li>)}
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>aaaa</td>
              </tr>

            </tbody>
            </table>
          </div>
        )
    }
}
