import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="scoreBoard">
                    <h3>Score</h3>
                    <div>
                          <div className="scoreBoard-titles">user </div>
                          <div className="scoreBoard-computer">computer</div>
                    </div>
                    <div>   
                        <div className="scoreBoard-scoreUser"> {this.props.userScore} : </div>   
                        <div className="scoreBoard-scoreComp">{this.props.computerScore} </div>
                    </div>
      </div>
    );
  }
}

export default Result;
