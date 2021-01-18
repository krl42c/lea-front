import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

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
          PieChart
          data={[
            {this.state.data.map(Proceso => {
            return (
              { title: Proceso.name, value: Proceso.Value, color: '#E38627' }
            );
          })}
  ]}
/>;
        )
    }
}
