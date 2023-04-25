import React from "react";
import "./Calc.css";

function Calc() {
  return <CalcForm />;
}

class CalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Hmmm: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Calc">
          <label>
            Team A:
            <div>
              <input type="text" name="team_a_spread" />
              <input type="text" name="over" />
              <br></br>
              <input type="text" name="team_a_spread_line" />
              <input type="text" name="over_line" />
            </div>
          </label>
          <label>
            Team B:
            <div>
              <input type="text" name="team_b_spread" />
              <input type="text" name="under" />
              <br></br>
              <input type="text" name="team_b_spread_line" />
              <input type="text" name="under_line" />
            </div>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Calc;
