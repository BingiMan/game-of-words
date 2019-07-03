import React from 'react';

export default class StatusComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Status Component Props");
    console.log(this.props);
  }


  render() {
    return (
      <div className='match-result'>
        {/*<img src={match_result} alt="reward-icon"/>*/}
        <div className='match-result-message'>
          <span>{this.props.won ? "You Won! 10 Points" : "You lost! 10 points"}</span>
        </div>
      </div>
    )
  }
}
