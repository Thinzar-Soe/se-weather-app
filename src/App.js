import React, { useState } from "react";

import Weather from "./Weather";
import "./App.css";

function App() {
  let [City, setCity] = useState("");
  let [show, setShow] = useState("New York");

  function handleSubmit(event) {
    event.preventDefault();
    setShow(City);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div class="main">
        <form class="form-group" onSubmit={handleSubmit}>
          <input
            type="search"
            class="form-control"
            id="city"
            onChange={updateCity}
            placeholder="Type a city..."
          />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        <Weather city={show} />
      </div>
      <footer class="source-footer">
        <a href="https://github.com/Thinzar-Soe/se-weather-app.git">
          Open-source code
        </a>{" "}
        by Thinzar Soe
      </footer>
    </div>
  );
}

export default App;
