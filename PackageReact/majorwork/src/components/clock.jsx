import React, { useState } from "react";
import "./clock.css";
const Clock = () => {
  //primary function: displaying time
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const UpdateTime = () => {
    now = new Date().toLocaleTimeString("ko-KR");
    setTime(now);
  };

  setInterval(UpdateTime, 1000);
  //secondary function: switch format
  let format = true;
  //true for 24 hours, false for AM/PM
  let timeArray = time.split(":");
  const CheckFormat = () => {
    if (format == true) {
    }
  };

  return (
    <>
      <div className="row justify-content-around">
        <div className="col-3">
          <span>{timeArray[0]}</span>
        </div>
        <div className="col-1">
          <span>:</span>
        </div>
        <div className="col-3">
          <span>{timeArray[1]}</span>
        </div>
        <div className="col-1">
          <span>:</span>
        </div>
        <div className="col-3">
          <span>{timeArray[2]}</span>
        </div>
      </div>
    </>
  );
};

export default Clock;
