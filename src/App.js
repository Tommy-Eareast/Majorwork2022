import React, { useState } from "react";
import Clock from "./components/clock";
import Timer from "./components/timer";
import "bootstrap/dist/css/bootstrap.css";

//true for Clock, false for Timer
export default function App() {
  const [mode, setMode] = useState(true);
  let btnCom = "btn col col-5 ";
  let clockDisplay = "d-block";
  let timerDisplay = "d-none";
  if (!mode) {
    clockDisplay = "d-none";
    timerDisplay = "d-block";
  } else {
    clockDisplay = "d-block";
    timerDisplay = "d-none";
  }
  return (
    <>
      <nav className="nav_btn">
        <div className="row w-100 justify-content-around">
          <button
            onClick={() => setMode(true)}
            className={
              mode
                ? btnCom + "bg-dark text-light"
                : btnCom + "bg-light text-dark"
            }
          >
            CLOCK
          </button>
          <button
            onClick={() => setMode(false)}
            className={
              mode
                ? btnCom + "bg-light text-dark"
                : btnCom + "bg-dark text-light"
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
