import React, { Component } from "react";

class Timer extends Component {
  state = {
    initTime: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.time}</span>
        <button>Start</button>
        <button>Stop</button>
      </React.Fragment>
    );
  }
}

export default Timer;
