import React from "react";
import { useState } from "react";
import "./ImpliedFinalScoreCalc.css";

function ImpliedFinalScoreCalc() {
  const [spread, setSpread] = useState("");
  const [overUnder, setOverUnder] = useState("");
  const [finalMessage, setFinalMessage] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var halfSpread = spread / 2;
    var halfOverUnder = overUnder / 2;
    var favorite = halfOverUnder + halfSpread;
    var underdog = halfOverUnder - halfSpread;
    setFinalMessage(`Implied Final Score:`);
    setOutput(`${favorite} - ${underdog}`);
  };

  return (
    <div className="ImpliedFinalScoreCalcWrapper">
      <div className="Title">Implied Final Score Calculator</div>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="Label">
            Spread:
            <input
              className="Input"
              type="number"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
            />
          </div>
        </label>
        <label>
          <div className="Label">
            Over/Under:
            <input
              className="Input"
              type="number"
              value={overUnder}
              onChange={(e) => setOverUnder(e.target.value)}
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

export default ImpliedFinalScoreCalc;
