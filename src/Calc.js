import React from "react";
import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [teamASpread, setTeamASpread] = useState("");
  const [over, setOver] = useState("");
  const [teamBSpread, setTeamBSpread] = useState("");
  const [under, setUnder] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(
      `Team A Spread: ${teamASpread}, Team B Spread: ${teamBSpread}, Over: ${over}, Under: ${under}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Team A:
          <input
            type="number"
            value={teamASpread}
            onChange={(e) => setTeamASpread(e.target.value)}
          />
          <input
            type="number"
            value={over}
            onChange={(e) => setOver(e.target.value)}
          />
        </label>
        <br />
        <label>
          Team B:
          <input
            type="number"
            value={teamBSpread}
            onChange={(e) => setTeamBSpread(e.target.value)}
          />
          <input
            type="number"
            value={under}
            onChange={(e) => setUnder(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>{output}</div>
    </div>
  );
}

export default Calc;
