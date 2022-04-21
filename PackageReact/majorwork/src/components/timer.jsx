import React, { useState } from "react";
import "./timer.css";

//btn appearance through bootstrap css
let btnCom = "btn col-4 btn-";
let btnLeft = btnCom + "success";
let left = "Start";
//only allow counting when this true
let allowCount = false;
//initialise the timer, counter[0] is minute, counter[1] is second, and counter[2] is milliseconds
const counter = {
  hour: 0,
  min: 0,
  sec: 0,
  millisec: 0,
};

const Timer = () => {
  const [currentCount, setCurrentCount] = useState(counter);
  return (
    <>
      <div className="row justify-content-around">
        <div className="col-2 text-center">
          <span>{currentCount.hour}</span>
        </div>
        <div className="col-1 text-center">
          <span>h</span>
        </div>
        <div className="col-2 text-center">
          <span>{currentCount.min}</span>
        </div>
        <div className="col-1 text-center">
          <span>m</span>
        </div>
        <div className="col-2 text-center">
          <span>{currentCount.sec}</span>
        </div>
        <div className="col-1 text-center">
          <span>s</span>
        </div>
        <div className="col-2 text-center">
          <span>{currentCount.millisec}</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <button className={btnLeft}>{left}</button>
        <button className={btnCom + "danger"}>Stop</button>
      </div>
    </>
  );
};

export default Timer;
