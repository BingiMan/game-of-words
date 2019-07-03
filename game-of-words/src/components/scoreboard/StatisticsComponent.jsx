import React from 'react';
import './style.css'

export default class StatisticsComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log("[STATISTIC COMPONENT]");
    // console.log(props);
    // console.log("[-------------------------]");
    // console.log(this.props.getState());

    this.state = {
      settings: this.props.getState().settings,
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
      <div className={this.state.settings.toggle ? 'main-container-active' : 'main-container'}>
        <table className='table-container'>
          <tbody>
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
