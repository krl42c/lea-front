import React from 'react';

export class Process extends React.Component {
    constructor(props) {
        super();
        this.state = {
            processList : []
        };
    }
  tick() {
    fetch("/api/process")
      .then(res => res.json())
      .then(json => {
        this.setState({
             processList : json
        })
      });
  }
    componentDidMount() {
        fetch("/api/process")
          .then(res => res.json())
          .then(json => {
            this.setState({
                processList : json
            });
          });
          this.interval = setInterval(() => this.tick(), 2000);
      }

   componentWillUnmount() {
    clearInterval(this.interval);
    }

    stopProcess(processName) {
		return function() {
            fetch("/api/stop_process", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: processName
                })
            })
		}
    }

    render() {
        return(
            //<div> {this.state.userList.map(s => (<li>{s}</li>))} </div>
            <div className="div-listas">
            <ul data-aos="fade-right" data-aos-duration="1000" class="list-group list-group-flush">
                   { this.state.processList.map(s => (  <li class="fondo list-group-item text-white"> {s}

                        <button class="btn btn-danger" href="" onClick={this.stopProcess({s})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>
                    <br/></li>))}
            </ul>
            </div>
        )

    }


}
