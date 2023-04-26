import React from "react";
import { useState } from "react";
import "./Calc.css";

function AmericanToImpliedProbablityCalc() {
  const [american, setAmerican] = useState("");
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
    setOutput(`${impliedProbability}%`);
  };

  return (
    <div className="Wrapper">
      <div className="Title">
        American <>&#129062;</> Implied Probablity
      </div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>American Odds:</td>
              <td>
                <label>
                  <div className="Label">
                    <input
                      class="Input Input-Wide"
                      type="number"
                      value={american}
                      onChange={(e) => setAmerican(e.target.value)}
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

export default AmericanToImpliedProbablityCalc;
