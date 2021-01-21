import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export class Bateria extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          Value : null,
          plug: false
      };
  }
  tick() {
    fetch("/api/battery")
      .then(res => res.json())
      .then(json => {
        this.setState({
            Value : json.Value,
            plug : json.Plug
        })
      });
  }
  componentDidMount() {
    fetch("/api/battery")
      .then(res => res.json())
      .then(json => {
        this.setState({
            Value : json.Value
        })
      });
    this.interval = setInterval(() => this.tick(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
    render() {

        return(
          <div>
          <CircularProgressbar
      value={this.state.Value}
      text={`${this.state.Value}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: " #ecf0f1 ",
        textColor: " #0d6efd ",
        pathColor: " #0d6efd ",
        trailColor: "transparent",
        textSize: '16px'
      })}
    />         
      <br />
          {
              this.state.plug?

              <p> Conectado </p>

              :

              <p> Desconectado </p>
            }
    </div>


        )
    }
}
