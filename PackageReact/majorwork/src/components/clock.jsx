import React, { useState } from "react";
import "./clock.css";

//true for 24 hours, false for AM/PM
var format = true;
var butCom = "btn col-6 animation";
//className for after animation
var butOn = " btn-primary col-md-7";
var butOff = " btn-secondary col-md-5";
//className for animation
var aniOn = " animationOn";
var aniOff = " animationOff";
//className
var but12 = butCom + butOff;
var but24 = butCom + butOn;
const Clock = () => {
  //primary function: displaying time, initial first display and now variable
  let now = new Date().toLocaleTimeString();
  //set up the main object and its function
  const [time, setTime] = useState(now);
  //create a updating function that convert time object into string for display
  const UpdateTime = () => {
    now = new Date().toLocaleTimeString();
    setTime(now);
  };
  //repeating above function to renew the time displayed
  setInterval(UpdateTime, 500);
  //format the time variable for separate display
  let timeArray = time.split(":");
  //secondary function: switch format, initial default to 24 hours display
  let apmChange = "col-2";
  //display AM/PM block on right side depend on format=?(true/false)
  apmChange += format === false ? "" : " d-none";
  let hour = parseInt(timeArray[0]);
  //exclude special case: 24th hour
  if (hour === 24) {
    hour = 0;
  }
  //determine AM or PM
  let apm = hour > 11 ? "PM" : "AM";
  if (!format && hour > 12) {
    hour = hour - 12;
  }
  //change format to 12 hours display
  let Change12 = () => (
    (format = false),
    (but12 = butCom + aniOn),
    (but24 = butCom + aniOff),
    //make time for the animation to play before changing class
    setTimeout(() => {
      but12 += butOn;
      but24 += butOff;
    }, 200)
  );
  //change format to 24 hours display
  let Change24 = () => (
    (format = true),
    (but12 = butCom + aniOff),
    (but24 = butCom + aniOn),
    //make time for the animation to play before changing class
    setTimeout(() => {
      but12 += butOff;
      but24 += butOn;
    }, 200)
  );

  //add one 0 to front to placehold for single digit hours
  hour = hour < 10 ? "0" + hour : hour;

  return (
    <>
      <div className="row justify-content-around">
        <div className="col-2">
          <span>{hour}</span>
        </div>
        <div className="col-1">
          <span>:</span>
        </div>
        <div className="col-2">
          <span>{timeArray[1]}</span>
        </div>
        <div className="col-1">
          <span>:</span>
        </div>
        <div className="col-2">
          <span>{timeArray[2]}</span>
        </div>
        <div className={apmChange}>{apm}</div>
      </div>
      <div className="row justify-content-around">
        <button onClick={() => Change12()} className={but12}>
          12 Hours Display
        </button>
        <button onClick={() => Change24()} className={but24}>
          24 Hours Display
        </button>
      </div>
    </>
  );
};

export default Clock;
