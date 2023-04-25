import React from "react";
import { useState } from "react";
import "./AmericanToImpliedProbablityCalc.css";

function AmericanToImpliedProbablityCalc() {
  const [american, setAmerican] = useState("");
  const [finalMessage, setFinalMessage] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var impliedProbability = 0;
    var odds = parseInt(american);
    if (odds >= 0) {
      impliedProbability = 100 / (odds + 100);
    } else {
      impliedProbability = (-1 * odds) / (-1 * odds + 100);
    }
    impliedProbability = impliedProbability * 100;
    impliedProbability = impliedProbability.toFixed(2);
    setFinalMessage(`Implied Probability:`);
    setOutput(`${impliedProbability}%`);
  };

  return (
    <div className="AmericanToImpliedProbablityCalcWrapper">
      <div className="Title">American To Implied Probablity Calculator</div>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="Label">
            American Odds:
            <input
              className="Input"
              type="number"
              value={american}
              onChange={(e) => setAmerican(e.target.value)}
            />
          </div>
        </label>
        <div>
          <button className="CalculateButton" type="submit">
            Calculate
          </button>
        </div>
      </form>
      <div className="Output">{finalMessage}</div>
      <div className="Output">{output}</div>
    </div>
  );
}

export default AmericanToImpliedProbablityCalc;
