import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Clock from "./components/clock";
import Timer from "./components/timer";

const header = (
  <header>
    <nav>
      <div className="row w-100">
        <button onClick={clockMode} className="btn col col-6">
          Clock
        </button>
        <button onClick={timerMode} className="btn col col-6">
          Timer
        </button>
      </div>
    </nav>
  </header>
);
//true for clock, false for timer
let mode;
function clockMode() {
  mode = true;
}
function timerMode() {
  mode = false;
}

ReactDOM.render(
  <React.StrictMode>{header}</React.StrictMode>,
  document.getElementById("box")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
