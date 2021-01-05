import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export class MemoriaRam extends React.Component {
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
              usage : json.Value
          })
        });
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
        textColor: " #2e86c1 ",
        pathColor: " #2e86c1 ",
        trailColor: "transparent",
        textSize: '16px'
      })}
    />


        )
    }
}
