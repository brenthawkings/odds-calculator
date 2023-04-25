import React from "react";
import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [spread, setSpread] = useState("");
  const [overUnder, setOverUnder] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var halfSpread = spread / 2;
    var halfOverUnder = overUnder / 2;
    var favorite = halfOverUnder + halfSpread;
    var underdog = halfOverUnder - halfSpread;
    setOutput(`Implied Final Score: ${favorite} - ${underdog}`);
  };

  return (
    <div>
      Implied Final Score Calculator
      <form onSubmit={handleSubmit}>
        <label>
          Spread:
          <input
            type="number"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
          Over/Under:
          <input
            type="number"
            value={overUnder}
            onChange={(e) => setOverUnder(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>{output}</div>
    </div>
  );
}

export default Calc;
