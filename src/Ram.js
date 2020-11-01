import React from 'react';

export class Ram extends React.Component {
    constructor(props) {
        super();
        this.state = {
            usage : null
        };
    }

    componentDidMount() {
        fetch("/api/ram")
          .then(res => res.json())
          .then(json => {
            this.setState({
                usage : json.Usage
            })
          });
      }
    
    render() {
        return(
            <div>
                <div>
                    <div class="progress">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow={this.state.usage} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        )
    }
}