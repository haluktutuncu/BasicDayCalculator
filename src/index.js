import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  {
    /* Button actions */
  }
  const handleStepBack = () => {
    if (step >= 1) {
      setStep(step - 1);
    }
  };

  const handleStepNext = () => {
    setStep(step + 1);
  };
  {
    /* Button actions */
  }
  const handleCounterBack = () => {
    setCounter(counter - step);
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - step);
      return newDate;
    });
  };

  const handleCounterNext = () => {
    setCounter(counter + step);
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + step);
      return newDate;
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleStepBack}>-</button>
        <p className="num1">Step:</p> <span>{step}</span>
        <button onClick={handleStepNext}>+</button>
      </div>
      <div>
        <button onClick={handleCounterBack}>-</button>
        <p className="num1">Count:</p> <span>{counter}</span>
        <button onClick={handleCounterNext}>+</button>
        <br></br>
        <br></br>
      </div>
      <span className="main">{`${Math.abs(counter)} days from today is ${
        daysOfWeek[currentDate.getDay()]
      }`}</span>{" "}
      <p>{currentDate.toLocaleDateString()}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
