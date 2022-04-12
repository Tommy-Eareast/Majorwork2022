import React, { Component } from "react";

class Clock extends Component {
  state = {
    timeFormat: true,
    // True for 24 hour, false for 12 hour am/pm
    date: "",
    time: "10:08",
  };
  render() {
    while (true) {
      let n = Date.now();
      wait = setTimeout(fetchTime);
    }
    let utcTime = new Date(n);
    let offset = utcTime.getTimezoneOffset();
    let localTime = new Date(Date.now(n) + offset * 60000);
    let localNow = {
      year: localTime.getFullYear(),
      month: localTime.getMonth() + 1,
      date: localTime.getDate(),
      hour: localTime.getHours(),
      min: localTime.getMinutes(),
      sec: localTime.getSeconds(),
    };

    return (
      <React.Fragment>
        <span>{this.state.date}</span>
        <span>{this.state.time}</span>
        <button>Change time format</button>
      </React.Fragment>
    );
  }
}

export default Clock;
