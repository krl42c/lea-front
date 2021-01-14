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
          usage : null
      };
  }
  tick() {
    fetch("/api/battery")
      .then(res => res.json())
      .then(json => {
        this.setState({
            Value : json.Value
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
          <CircularProgressbar
      value={this.state.Value}
      text={`${this.state.Value}%`}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: " #ecf0f1 ",
        textColor: " #2e86c1 ",
        pathColor: " #2e86c1 ",
        trailColor: "transparent",
        textSize: '16px'
      })}
    />


        )
    }
}
