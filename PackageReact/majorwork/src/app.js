import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Clock from "./components/clock";
import Timer from "./components/timer";

ReactDOM.render(
  <React.StrictMode>
    {mode === "isClock" && <Clock />}
    {mode === "isTimer" && <Timer />}
  </React.StrictMode>,
  document.getElementById("box")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
