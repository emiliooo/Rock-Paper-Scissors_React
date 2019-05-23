import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <p>{this.props.resultMessage}</p>
        <p>the computer chose:{this.props.computerChosenAction}</p>
      </div>
    );
  }
}

export default Result;
