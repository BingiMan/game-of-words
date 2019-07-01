import React from 'react';

export default class StatusComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Status Component Props");
    console.log(this.props);
  }


  render() {
    return (
      <div>
        <img src="" alt="reward-icon"></img>
        <div>
          <span>{this.props.won ? "you won! 10 Points" : "You lost! 10 points"}</span>
        </div>
      </div>
    )
  }
}