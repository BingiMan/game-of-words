import React from 'react';
import StatusComponent from "./StatusComponent";
import StatisticsComponent from "./StatisticsComponent";


export default class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.parentState;
    this.StatisticComponentChildRef = React.createRef();
  }

  getPoints = (points) => {
    this.setState((prevState, props) => ({
      scoreboard: Object.assign(
        {},
        prevState.scoreboard,
        {
          currentScore: ((points > 0 || (prevState.scoreboard.currentScore > Math.abs(points)) ? prevState.scoreboard.currentScore + points : 0))
        }
      )
    }), () => {
      console.log('[CALL BACK CURRENT POINTS]');
      console.log(this.state);
      this.StatisticComponentChildRef.current.updateScoreBoard(this.state)
    });

    return this.state.scoreboard.currentScore;
  };


  updateSettings = (parentState) => {
    if (parentState) {
      this.setState((prevState) => ({
        settings: Object.assign(
          {},
          prevState.settings,
          parentState.settings
        )
      }));
    }

    return this.state;
  };

  updateScoreBoard = () => {
    this.updateScoreboard({
      totalGamesPlayed: this.state.scoreboard.totalGamesPlayed + 1,
      gamesWon: this.state.settings.won ? this.state.scoreboard.gamesWon + 1 : this.state.scoreboard.gamesWon,
      gamesLost: !this.state.settings.won ? this.state.scoreboard.gamesLost + 1 : this.state.scoreboard.gamesLost,
    }, () => {
      this.StatisticComponentChildRef.current.updateScoreBoard(this.state)
    })
  };

  calculatePoints = () => {
    console.log('[CALCULATING POINTS]');
    if (this.state.settings.won) {
      console.log(this.getPoints(10));
    } else {
      console.log(this.getPoints(-10));
    }
  };

  updateBestTime = (newTime) => {
    this.updateScoreboard({ bestTime: newTime }, () => {
      console.log("Updating best time");
      console.log(this.state);
      console.log(newTime);
      this.StatisticComponentChildRef.current.updateScoreBoard(this.state);
    })
  };

  updateScoreboard = (jsonObject, callback) => {
    this.setState((prevState, props) => ({
      scoreboard: Object.assign(
        {},
        prevState.scoreboard,
        jsonObject
      )
    }), callback);
  };

  render() {
    return (
      <div>
        {this.state.settings.gameOver && this.state.settings.toggle ?
          <StatusComponent sendPoints={this.getPoints.bind(this)} won={this.state.settings.won} /> : null}
        <StatisticsComponent ref={this.StatisticComponentChildRef} getState={this.updateSettings.bind(this)}
          storeScoreboard={this.props.storeScoreboard} />

      </div>
    )
  }
}
