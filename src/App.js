import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const increment = () => {
    if (step > 0 && step < 3) setStep((prev) => prev + 1);
    console.log(step);
  };
  const decrement = () => {
    if (step > 1) setStep((prev) => prev - 1);
    console.log(step);
  };
  return (
    <div className="App mt4 flex justify-center">
      <div className="main-container">
        <div className="number-container">
          {step >= 1 ? (
            <div className="number">1</div>
          ) : (
            <div style={{ filter: `saturate(0)` }} className="number">
              1
            </div>
          )}{" "}
          {step >= 2 ? (
            <div className="number">2</div>
          ) : (
            <div style={{ filter: `saturate(0)` }} className="number">
              2
            </div>
          )}{" "}
          {step === 3 ? (
            <div className="number">3</div>
          ) : (
            <div style={{ filter: `saturate(0)` }} className="number">
              3
            </div>
          )}
        </div>
        <div className="step-container">
          <h2>{step === 1 && `Step ${step}: Learn React`}</h2>
          <h2>
            {step === 2 && ` Step ${step}: Apply for Jobs `}
            <h2> {step === 3 && `Step ${step}: Get Paid`}</h2>
          </h2>
        </div>
        <div className="btn-container">
          <button className="br-pill" onClick={decrement}>
            Previous
          </button>
          <button className="br-pill" onClick={increment}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
