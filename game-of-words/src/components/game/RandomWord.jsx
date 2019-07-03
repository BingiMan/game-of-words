import React from 'react'
import Input from './Input'
import './game-style.css'

export default class RandomWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.settings.word,
      description: props.settings.description,
      matches: false
    }
  }


  checkIfWordMatches = (matchResponse) => {
    // console.log(matchResponse);
    this.props.checkIfUserWon(matchResponse);
    this.setState((prevState, props) => (
      {
        word: prevState.word,
        matches: matchResponse
      }
    ));
  };


  updateWord = (parentState) => {
    if (parentState) {
      this.setState((prevState) => ({
        word: parentState.settings.word,
        description: parentState.settings.description[0].definition,
      }), () => {
        console.log(this.state);
      });
    }

    return this.state;
  };


  randomizeWord(word) {
    // console.log(word);
    let randomWord = word.split('');
    // console.log(randomWord);

    for (let currentCharacterIndex = word.length - 1; currentCharacterIndex > 0; currentCharacterIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentCharacterIndex + 1));

      const tempValue = randomWord[currentCharacterIndex];
      randomWord[currentCharacterIndex] = randomWord[randomIndex];
      randomWord[randomIndex] = tempValue;
    }
    // console.log(randomWord);
    return randomWord;
  }

  render() {
    return (
      <div className='game-main-container'>
        <div className='board-img'>
          {this.state.word ?
            <div className='game-content-wrapper'>
              <div>
                <h1 className='word-definition'>Definition</h1>
                <p className="word-description">{this.state.description}</p>
                {/*<h5>{this.props.word.results[0].definition}</h5>*/}
                {/*<li>{this.props.word.results[0].typeOf}</li>*/}
              </div>
              <div className="word-list-container">
                <ul>
                  {
                    this.randomizeWord(this.state.word).map(character => {
                      return (
                        <li key={(Math.floor(Math.random() * 100) + 100) + character}
                          className="word-wooden">
                          <div className='random-word'> {character} </div>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
            : null}
        </div>

        <div className='game-input'>
          <Input rightWord={this.state.word} matchWord2={this.checkIfWordMatches.bind(this)}
            gameOverDisplay={this.props.gameOverDisplay} />
        </div>
      </div>
    )
  }
}
