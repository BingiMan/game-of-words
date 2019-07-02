import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleClick = (event) => {
    this.props.matchWord2(this.matchWord(this.state.inputValue));
    this.props.gameOverDisplay();
  };

  handleChange = (event) => {
    const newWord = event.target.value;
    // console.log(newWord);
    this.setState({
      inputValue: newWord
    })
  };

  matchWord = (myWord) => {
    return this.props.rightWord.toLowerCase() === myWord.toLowerCase();
  };

  render() {
    return (
        <div>
          <input type="text" placeholder="Guess the word" onChange={this.handleChange} />
          <button className='game-button' onClick={this.handleClick}>Guess</button>
        </div>
    )
  }
}