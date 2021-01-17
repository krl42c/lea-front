import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export class MemoriaRam extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          usage : null
      };
  }
  tick() {
    fetch("/api/ram")
      .then(res => res.json())
      .then(json => {
        this.setState({
            usage : json.Value
        })
      });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

    render() {

        return(
          <CircularProgressbar
      value={this.state.usage}
      text={`${this.state.usage}%`}
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


        )
    }
}
