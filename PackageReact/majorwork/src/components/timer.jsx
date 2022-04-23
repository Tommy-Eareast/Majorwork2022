import React, { useState, useEffect } from "react";
import "./timer.css";

//btn appearance through bootstrap css
let btnCom = "btn col-4 btn-";

//recorded timestamps
const RecordList = () => {
  const [timestamps, setTimestamps] = useState("");
  return (
    <>
      <div className="w-100">{timestamps}</div>
    </>
  );
};

//timer component
const Timer = () => {
  //only allow counting when this true
  const [allowCount, setAllowCount] = useState(false);
  //initialise the counter
  const [counter, setCounter] = useState(0);
  //counting function
  const AllowCount = () => {
    setAllowCount(!allowCount);
  };
  //default word
  let btnColor = allowCount ? "warning" : "success";

  //counting function
  useEffect(() => {
    //set up a counting variable
    let counting = undefined;
    //start counting when allowCount is true
    if (allowCount) {
      //set up looping function
      counting = setInterval(() => {
        setCounter((counter) => counter + 10);
      }, 10);
    }
    //stop timer when allowCount is false
    return () => clearInterval(counting);
  }, [allowCount]);

  //reset the timer function
  const ResetTimer = () => {
    setAllowCount(false);
    setCounter(0);
    //deleteRecord()
  };
  //initialise time display
  const time = {
    hours: Math.floor(counter / (1000 * 60 * 60)),
    min: Math.floor((counter / (1000 * 60)) % 60),
    sec: Math.floor((counter / 1000) % 60),
    millisec: (counter % 1000) / 10,
  };

  return (
    <>
      <div className="row justify-content-around">
        <div className="col-2 text-center">
          <span>{time.hours}</span>
        </div>
        <div className="col-1 text-center">
          <span>h</span>
        </div>
        <div className="col-2 text-center">
          <span>{time.min}</span>
        </div>
        <div className="col-1 text-center">
          <span>m</span>
        </div>
        <div className="col-2 text-center">
          <span>{time.sec}</span>
        </div>
        <div className="col-1 text-center">
          <span>s</span>
        </div>
        <div className="col-2 text-center">
          <span>{time.millisec}</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <button className={btnCom + btnColor} onClick={() => AllowCount()}>
          {allowCount ? "Stop" : "Start"}
        </button>
        <button className={btnCom + "info"}>Record</button>
        <button className={btnCom + "danger"} onClick={() => ResetTimer()}>
          Reset
        </button>
      </div>
      <RecordList />
    </>
  );
};

export default Timer;
