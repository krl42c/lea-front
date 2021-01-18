import React from 'react';

export class InfoDisk extends React.Component {
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
          <p>Info Disk</p>
        )
    }
}
