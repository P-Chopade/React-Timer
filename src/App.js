import React, { useEffect, useState } from "react";
import ti from "./ti.jpg";
import "./App.css";

function App() {
  const [time, settime] = useState(0);
  const [run, setrun] = useState(false);
  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        settime((prevtime) => prevtime + 10);
      }, 10);
    } else if (!run) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div class="container">
        <div class="card" id="td1">
          <div class="card-body">
            <h5 class="card-title">Timer</h5>
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card" id="cst">
              <img src={ti} class="card-img-top" alt="..." />{" "}
              <div class="card-body">
                <button onClick={() => setrun(true)}>Start </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card " id="cst">
              <img src={ti} class="card-img-top" alt="..." />
              <div class="card-body">
                <button onClick={() => setrun(false)}>Stop </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" id="cst">
              <img src={ti} class="card-img-top" alt="..." />
              <div class="card-body">
                <button onClick={() => settime(0)}>reset </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
