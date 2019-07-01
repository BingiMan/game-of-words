import React from 'react';
import './style.css'

export default class StatisticsComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("[STATISTIC COMPONENT]");
    console.log(props);
    console.log("[-------------------------]");
    console.log(this.props.getState());

    this.state = {
      scoreboard: this.props.getState().scoreboard
    }
  }

  updateScoreBoard = (state) => {
    this.setState({
      scoreboard: state.scoreboard
    },
      () => {
        this.props.storeScoreboard(this.state)
      }
    );

  };


  render() {
    return (
      <div className='main-container'>
        <table className='table-container'>
          <tbody>
            <div id='panelCaller'>
              <span>S</span>
              <span>C</span>
              <span>O</span>
              <span>R</span>
              <span>E</span>
              <span>B</span>
              <span>O</span>
              <span>A</span>
              <span>R</span>
              <span>D</span>
            </div>
            <tr>
              <th>Total Games Played</th>
              <th>{this.state.scoreboard.totalGamesPlayed}</th>
            </tr>
            <tr>
              <th>Games Won</th>
              <th>{this.state.scoreboard.gamesWon}</th>
            </tr>
            <tr>
              <th>Games Lost</th>
              <th>{this.state.scoreboard.gamesLost}</th>
            </tr>
            <tr>
              <th>Best Time</th>
              <th>{this.state.scoreboard.bestTime}</th>
            </tr>
            <tr>
              <th>Total Score</th>
              <th>{this.state.scoreboard.currentScore}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}