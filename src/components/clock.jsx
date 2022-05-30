import React, { useState } from "react";
import "./clock.css";

//className for after animation
let btnOn = " btnOn col-md-7";
let btnOff = " btnOff col-md-3";
//true for 24 hours, false for AM/PM
let format = true;
let btnCom = "col-4 animation";
//className for animation
let aniOn = " animationOn";
let aniOff = " animationOff";
//className
let btn12 = btnCom + btnOff;
let btn24 = btnCom + btnOn;
const Clock = () => {
  //primary function: displaying time, initial first display and now variable
  let now = new Date().toLocaleString("en-AU", { hour12: false });
  //set up the main object and its function
  const [time, setTime] = useState(now);
  //create a updating function that convert time object into string for display
  const UpdateTime = () => {
    now = new Date().toLocaleString("en-AU", { hour12: false });
    setTime(now);
  };
  //repeating above function to renew the time displayed
  setInterval(() => {
    UpdateTime();
  }, 250);
  //date and time array
  let array = time.split(", ");
  //date display
  let dateArray = array[0].split("/");
  //format the time variable for separate display
  let timeArray = array[1].split(":");
  let hour = parseInt(timeArray[0]);
  let date = parseInt(dateArray[0]);
  let month = parseInt(dateArray[1]);
  //exclude special case: 24th hour
  if (hour === 24) {
    hour = 0;
  }
  let apm = format ? " d-none" : "";
  let apmText = hour > 11 ? "PM" : "AM";
  //if is in 12 hour format display AND hour is more than 12, make hours in 12 hour display
  if (!format && hour > 12) {
    hour = hour - 12;
  }
  //change format to 12 hours display
  let Change12 = () => {
    if (!format) {
      return;
    }
    format = false;
    //change the button size and color
    btn12 = btnCom + aniOn;
    btn24 = btnCom + aniOff;
    //make time for the animation to play before changing class
    btn12 += btnOn;
    btn24 += btnOff;
  };
  //change format to 24 hours display
  let Change24 = () => {
    if (format) {
      return;
    }
    format = true;
    //change the button size and color
    btn12 = btnCom + aniOff;
    btn24 = btnCom + aniOn;
    //make time for the animation to play before changing class
    btn12 += btnOff;
    btn24 += btnOn;
  };

  //add one 0 to front to placehold for single digit hours
  hour = hour < 10 ? "0" + hour : hour;
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  return (
    <>
      <div className="display_clock">
        <div className="display_area_clock">
          <div className="display_container text-center">
            <span
              className={"display_font" + apm}
              style={{ width: "8.33%" }}
            ></span>
            <span className="display_time display_font">{String(hour)}</span>
            <span className="display_time display_font col-auto">:</span>
            <span className="display_time display_font">{timeArray[1]}</span>
            <span className="display_time display_font col-auto">:</span>
            <span className="display_time display_font">{timeArray[2]}</span>
            <span className={"display_font apm col-1 " + apm}>{apmText}</span>
          </div>
          <span
            style={{
              backgroundColor: " #ff7810",
              width: "30%",
              height: "2px",
              border: "3px solid #ff7810",
              borderRadius: "50px",
              margin: "4%",
            }}
          ></span>
          <div className="display_container text-center">
            <span className="display_date display_font">{date}</span>
            <span className="display_date display_font col-auto">-</span>
            <span className="display_date display_font">{month}</span>
            <span className="display_date display_font col-auto">-</span>
            <span className="display_date display_font">
              {dateArray[2].slice(-2)}
            </span>
          </div>
        </div>
        <div className="btn_bar_clock row justify-content-around">
          <button onClick={() => Change12()} className={btn12}>
            AM/PM
          </button>
          <button onClick={() => Change24()} className={btn24}>
            24 HOURS
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
