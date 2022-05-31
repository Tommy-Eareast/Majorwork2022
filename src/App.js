import React, { useState } from "react";
import Clock from "./components/clock";
import Timer from "./components/timer";
import "bootstrap/dist/css/bootstrap.css";

var body = document.documentElement;

//true for Clock, false for Timer
export default function App() {
  const [mode, setMode] = useState(true);
  const [tipBox, setTipBox] = useState(true);
  let btnCommon = "col col-5 ";
  let clockDisplay = "d-block";
  let timerDisplay = "d-none";
  if (!mode) {
    clockDisplay = "d-none";
    timerDisplay = "d-block";
  } else {
    clockDisplay = "d-block";
    timerDisplay = "d-none";
  }
  function fullScreen() {
    setTipBox(false);
    body.requestFullscreen();
  }
  return (
    <>
      <button
        className={tipBox ? "tipBox" : "d-none"}
        onClick={() => fullScreen()}
      >
        Click to enter full screen mode. Press ESC or F11 to exit full screen
        mode.
      </button>
      <nav className="nav_btn">
        <div className="row w-100 justify-content-around">
          <button
            onClick={() => setMode(true)}
            className={
              mode
                ? btnCommon + "bg-dark text-light"
                : btnCommon + "bg-light text-dark"
            }
          >
            CLOCK
          </button>
          <button
            onClick={() => setMode(false)}
            className={
              mode
                ? btnCommon + "bg-light text-dark"
                : btnCommon + "bg-dark text-light"
            }
          >
            TIMER
          </button>
        </div>
      </nav>
      <div className={clockDisplay + " main_container"}>
        <Clock />
      </div>
      <div className={timerDisplay + " main_container"}>
        <Timer />
      </div>
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
