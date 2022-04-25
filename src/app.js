import React, { useState } from "react";
import Clock from "./components/clock";
import Timer from "./components/timer";
import "bootstrap/dist/css/bootstrap.css";

//true for Clock, false for Timer
export default function App() {
  const [mode, setMode] = useState(true);
  let btnCom = "btn col col-6 ";
  return (
    <>
      <div className="bgcolor">
        <nav>
          <div className="row w-100">
            <button
              onClick={() => setMode(true)}
              className={
                mode
                  ? btnCom + "bg-dark text-light"
                  : btnCom + "bg-light text-dark"
              }
            >
              Clock
            </button>
            <button
              onClick={() => setMode(false)}
              className={
                mode
                  ? btnCom + "bg-light text-dark"
                  : btnCom + "bg-dark text-light"
              }
            >
              Timer
            </button>
          </div>
        </nav>
        <div>
          {mode && <Clock />}
          {!mode && <Timer />}
        </div>
      </div>
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
