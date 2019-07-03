import React, { Component } from 'react';
import './style.css'

export default class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: new Date().getTime(),
      endingTime: new Date().getTime(),
      timeElapsed: 0
    };

    this.timer = null;
  }

  updateTime = () => {
    // console.log("[UPDATING TIME] " + this.props.gameOver);
    if (!this.props.gameOver && !this.props.gamePaused) {
      this.setState({
        timeElapsed: Math.floor((new Date().getTime() - this.state.startTime) / 1000)
      });
    }
    return this.state.timeElapsed;
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    // this.props.updateTimer(this.state.timeElapsed);
  }

  stopTimer = () => {
    // console.log("Stopping Timer");
    if (this.timer !== null)
      clearInterval(this.timer);

    return this.updateTime();
  };

  render() {
    return (
      <div className="timmer-bg">
        <div className="font-time">
          {this.state.timeElapsed}s
                </div>
      </div>
    );
  }
}