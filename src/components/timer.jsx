import React, { useState, useEffect } from "react";
//this file has no css because all is integrated into style.css -- the main css page
//this is not a good practice but since only a few component requires css in this page, it is utilised

//btn appearance through bootstrap css
let btnCom = "btn col-4 btn-";

//timer component
const Timer = () => {
  //only allow counting when this true
  const [allowCount, setAllowCount] = useState(false);
  //initialise the counter
  const [counter, setCounter] = useState(0);
  //initialise the record list
  const [timestamps, setTimestamps] = useState([]);
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
    //reset counter
    setCounter(0);
    //delete all record
    setTimestamps([]);
  };
  //turn the counter into unit time
  const time = {
    hours: Math.floor(counter / (1000 * 60 * 60)),
    min: Math.floor((counter / (1000 * 60)) % 60),
    sec: Math.floor((counter / 1000) % 60),
    millisec: (counter % 1000) / 10,
  };
  //fill in "0" when single digit
  if (time.min < 10) {
    time.min = "0" + String(time.min);
  }
  if (time.sec < 10) {
    time.sec = "0" + String(time.sec);
  }
  if (time.millisec < 10) {
    time.millisec = "0" + String(time.millisec);
  }
  //display only seconds and milliseconds / minutes if counter less than 1 minute / 1 hour
  let displayHours = parseInt(time.hours) !== 0 ? true : false;
  let displayMin =
    parseInt(time.hours) === 0 && parseInt(time.min) === 0 ? false : true;
  //record timestamp function
  const RecordTimestamp = (time, index) => {
    if (timestamps.length > 9) {
      alert(
        "Max number or record reached! (10 max)" +
          "\n" +
          "Press reset to restart timer or delete existing record."
      );
      return;
    }
    let record = undefined;
    if (!allowCount) return;
    if (displayHours) {
      record =
        time.hours +
        " h " +
        time.min +
        " m " +
        time.sec +
        " s " +
        time.millisec +
        " ms";
    } else if (displayMin) {
      record = time.min + " m " + time.sec + " s " + time.millisec + " ms";
    } else {
      record = time.sec + " s " + time.millisec + " ms";
    }
    //make new array with inserted timestamp
    const newRecord = [...timestamps, { record }];
    //update the state with newRecord
    setTimestamps(newRecord);
  };
  const RemoveRecord = (index) => {
    const newRecord = [...timestamps];
    newRecord.splice(index, 1);
    setTimestamps(newRecord);
  };
  return (
    <>
      <div className="row justify-content-around displayblock">
        {displayHours && (
          <div className="col-2 text-center">
            <span className="displayfont">{time.hours}</span>
          </div>
        )}
        {displayHours && (
          <div className="col-1 text-center">
            <span className="displayfont">:</span>
          </div>
        )}
        {displayMin && (
          <div className="col-2 text-center">
            <span className="displayfont">{time.min}</span>
          </div>
        )}
        {displayMin && (
          <div className="col-1 text-center">
            <span className="displayfont">:</span>
          </div>
        )}
        <div className="col-2 text-center">
          <span className="displayfont">{time.sec}</span>
        </div>
        <div className="col-2 text-center">
          <span className="displayfont">.</span>
        </div>
        <div className="col-2 text-center">
          <span className="displayfont">{time.millisec}</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <button className={btnCom + btnColor} onClick={() => AllowCount()}>
          {allowCount ? "Stop" : "Start"}
        </button>
        <button
          className={btnCom + "info"}
          onClick={() => RecordTimestamp(time)}
        >
          Record
        </button>
        <button className={btnCom + "danger"} onClick={() => ResetTimer()}>
          Reset
        </button>
      </div>
      <div className="w-100 displayrecord">
        Recorded Timestamp:
        <span>
          {timestamps.map((timestamp, index) => (
            <div className="record text-center">
              Record No.{index + 1} : {timestamp.record} [
              <button className="smallbtn" onClick={() => RemoveRecord(index)}>
                Delete
              </button>
              ]
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default Timer;
