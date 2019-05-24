import React, { Component } from "react";
import Actions from './Actions'
import Scoreboard from './ScoreBoard';
import Result from './Result';
import Header from './Header';


class Game extends Component {
    constructor(props) {
        super(props);
        this.handleActionClick = this.handleActionClick.bind(this);
        this.randomComputer = this.randomComputer.bind(this);
        this.setWinner = this.setWinner.bind(this);

        this.state = {
          userChosenAction: "",
          secondChosenAction:"",
          computerChosenAction: "",
          result: "",
          winner: "",
          visible: false,
          score: {
            userScore: 0,
            computerScore: 0
          }
        };
      }

    handleActionClick(e) {
         this.setState(
        {
            userChosenAction: e.target.getAttribute("data-action")
        },
        () => {
            this.setWinner();
        }
         );
    }

    randomComputer() {
        var choice2 =  Math.random();
        if (choice2 >= 0 && choice2 <= 0.33) {
            return choice2 = "Paper";
          } else if (choice2 >= 0.34 && choice2 <= 0.66) {
            return choice2 = "Rock";
          } else return choice2 = "Scissors";
    }

    setWinner() {
    let choice1 = this.state.userChosenAction;
    let choice2 =  this.randomComputer();
    let newScore = Object.assign({}, this.state.score);
  
    this.setState({
        computerChosenAction: choice2
      });
    if (choice1 === choice2) {
      this.setState({
        result: "Tie",
        winner: "",
        visible: true
      });
    } else {
      if (choice1 === "Rock") {
          console.log('rock')
        if (choice2 === "Scissors") {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "You Win!",
            winner: "User",
            score: newScore,
            visible: true
          });
        } else {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true
          });
        }
      }

      if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "You Win!",
            winner: "User",
            score: newScore,
            visible: true
          });
        } else {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true
          });
        }
      }

      if (choice1 === "Paper") {
        if (choice2 === "Scissors") {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true
          });
        } else {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "You Win!",
            winner: "User",
            score: newScore,
            visible: true
          });
          }
         }
        }
    }

  render() {
    return (
      <div className="game">
        <Header/>
        <Scoreboard userScore={this.state.score.userScore} computerScore={this.state.score.computerScore}/>
        <Actions onClick={e => this.handleActionClick(e)}/>
        {this.state.visible && <Result resultMessage={this.state.result} computerChosenAction={this.state.computerChosenAction}/>}
      </div>
    );
  }
}

export default Game;
