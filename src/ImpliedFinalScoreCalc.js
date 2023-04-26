import React from "react";
import { useState } from "react";
import "./Calc.css";

function ImpliedFinalScoreCalc() {
  const [spread, setSpread] = useState("");
  const [overUnder, setOverUnder] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var halfSpread = spread / 2;
    var halfOverUnder = overUnder / 2;
    var favorite = halfOverUnder + halfSpread;
    var underdog = halfOverUnder - halfSpread;
    setOutput(`${favorite} - ${underdog}`);
  };

  return (
    <div className="Wrapper">
      <div className="Title">Implied Final Score</div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Spread:</td>
              <td>
                <label>
                  <div className="Label">
                    <input
                      class="Input Input-Narrow"
                      type="number"
                      value={spread}
                      onChange={(e) => setSpread(e.target.value)}
                    />
                  </div>
                </label>
              </td>
            </tr>
            <tr>
              <td>Over/Under:</td>
              <td>
                <label>
                  <div className="Label">
                    <input
                      class="Input Input-Narrow"
                      type="number"
                      value={overUnder}
                      onChange={(e) => setOverUnder(e.target.value)}
                    />
                  </div>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <button className="CalculateButton" type="submit">
                  =
                </button>
              </td>
              <td>
                <text className="Output">{output}</text>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ImpliedFinalScoreCalc;
