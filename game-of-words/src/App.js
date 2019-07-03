import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import RandomWord from './components/game/RandomWord'
import { Home } from './components/main/Home'
import { fetchData } from './service/word-api'
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import TimeComponent from "./components/timer/TimeComponent";
import home_btn_img from './assets/img/home-btn.png'
import play_btn_img from './assets/img/play-btn.png'

class App extends React.Component {
  constructor() {
    super();
    this.disableAPI = true;

    this.mySettings = {
      word: "aruba",
      description: "a popular island resort in the Netherlands Antilles",
      won: false,
      toggle: false,
      gameOver: false,
      timeElapsed: 0,
      gamePaused: true
    };

    this.ScoreBoard = {
      totalGamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      bestTime: 0,
      currentScore: 0,
    };

    this.state = {
      settings: this.mySettings,
      scoreboard: this.ScoreBoard
    };

    this.timerRef = React.createRef();
    this.scoreBoardRef = React.createRef();
    this.randomWordRef = React.createRef();
  }

  storeScoreboard = (childState) => {
    this.setState({
      scoreboard: Object.assign(
        {},
        this.state.scoreboard,
        childState.scoreboard
      )
    })

  };

  gameOverDisplay = () => {
    this.setState((prevState, props) => (
      {
        settings: Object.assign(
          {},
          prevState.settings,
          {
            gameOver: !prevState.settings.gameOver,
            toggle: true
          }
        )
      }
    ));
  };
  toggleScoreBoard = () => {
    this.setState((prevState, props) => (
      {
        settings: Object.assign(
          {},
          prevState.settings,
          {
            toggle: !prevState.settings.toggle,
            gameOver: false
          }
        )
      }
    ));
  };

  goHome = () => {
    this.endGame();
    this.setState((prevState, props) => (
      {
        settings: Object.assign(
          {},
          prevState.settings,
          {
            toggle: false,
            gameOver: false,
          }
        )
      }
    ));
  };

  checkIfUserWon = (_won) => {
    console.log("[USER WON] ? " + _won);
    this.setState((prevState, props) => (
      {
        settings: Object.assign(
          {},
          prevState.settings,
          { won: _won }
        )
      }
    ), () => {
      console.log("[CALL BACK WON]");
      console.log(this.state);
      this.scoreBoardRef.current.updateSettings(this.state);
      this.scoreBoardRef.current.updateScoreBoard();
      this.scoreBoardRef.current.calculatePoints();
      this.endGame();
    });
  };

  fetchWord = async () => {
    if (!this.disableAPI) {
      const data = await fetchData();
      // console.log(data);
      // console.log(data.results);

      if (data.word.split(' ').length > 1 || !data.results) {
        // console.log('fetching another data');
        return this.fetchWord();
      }

      this.setState((prevState, props) => (
        {
          settings: Object.assign(
            {},
            prevState.settings,
            {
              word: data.word,
              description: data.results
            }
          )
        }
      ), () => {
        console.log('[call back fetch]');
        // console.log(this.state.settings);
        this.randomWordRef.current.updateWord(this.state);
      });
    }
  };

  endGame = () => {
    if (!this.state.settings.gamePaused) {
      const timeElapsed = this.timerRef.current.stopTimer();

      if (this.state.settings.won) {
        console.log("UPDATING BEST TIME");
        this.setBestTime(timeElapsed);
      }

      this.setState((prevState, props) => ({
        settings: Object.assign(
          {},
          prevState.settings,
          {
            gameOver: true,
            gamePaused: true,
            timeElapsed: timeElapsed
          }
        )

      }), () => {
      });
    }
  };

  startGame = () => {
    this.fetchWord();

    console.log("Starting game");
    // console.log(this.fetchData());
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {
          gameOver: false,
          gamePaused: false,
          toggle: false
        }
      )
    }, () => {
      console.log(this.state.settings);
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
    })
  };

  setBestTime = (newTime) => {
    const currentBestTime = this.state.scoreboard.bestTime;
    if (currentBestTime === 0 || (newTime > 0 && newTime < currentBestTime)) {
      this.setState((prevState) => ({
        scoreboard: Object.assign(
          {},
          prevState.scoreboard,
          { bestTime: newTime }
        )
      }),
        () => {
          this.scoreBoardRef.current.updateBestTime(newTime);
          console.log(this.state);
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" onClick={this.goHome}>
            <img className='link-img' src={home_btn_img} alt="home" height="100" />
          </Link>
          <Link onClick={this.startGame} to="/game-of-words">
            <img className='link-img' src={play_btn_img} alt="play now" height="100" />
          </Link>
          {/*<Link to="/under-construction">Magic</Link>*/}
        </header>
        <main>
          <Route exact path="/" render={Home} />
          <Route exact path="/game-of-words" render={() => <RandomWord gameOverDisplay={this.gameOverDisplay}
            settings={this.state.settings}
            checkIfUserWon={this.checkIfUserWon.bind(this)}
            ref={this.randomWordRef} />} />
          {this.state.settings.toggle || this.state.settings.gameOver ?
            <ScoreBoard ref={this.scoreBoardRef} parentState={this.state}
              storeScoreboard={this.storeScoreboard.bind(this)} /> : null}
          {!this.state.settings.gamePaused ?
            <TimeComponent ref={this.timerRef} gameOver={this.state.settings.gameOver}
              gamePaused={this.state.settings.gamePaused} /> : null}
          <button className={this.state.settings.toggle ? 'scoreboard-button-active' : 'scoreboard-button'}
            onClick={this.toggleScoreBoard}>
            SCOREBOARD
                    </button>
        </main>
      </div>
    );
  }
}

export default App;
