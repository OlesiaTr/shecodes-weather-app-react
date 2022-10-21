import React, { useState } from "react";
import "../css partials/App.css";

export default function App(newCity) {
  console.log(newCity);
  return (
    <section className="main-window">
      <div className="main-text">
        <h1 id="temp">27°C</h1>
        <h2 id="weather">Partly cloudy</h2>
      </div>
      <div className="degrees-choice">
        <span>
          {/* TO TURN BACK INTO LINKS */}
          <button href="#" id="celsius">
            °C
          </button>{" "}
          |{" "}
          <button href="#" id="fahrenheit">
            °F
          </button>
        </span>
      </div>
    </section>
  );
}
