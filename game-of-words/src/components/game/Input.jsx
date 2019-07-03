import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.formRef = React.createRef();
    this.inputs = [];
  }

  handleClick = (event) => {
    let newWord = '';
    for (let input of this.formRef.current.childNodes) {
      newWord += input.value;
    }
    // console.log('new Word: ' + newWord);
    this.setState({
      inputValue: newWord
    }, () => {
      console.log(this.state.inputValue);
      this.props.matchWord2(this.matchWord(this.state.inputValue));
      this.props.gameOverDisplay();
    });

  };

  handleKeyDown = (event) => {
    const form = event.target.form;
    const characterKey = event.keyCode;//character code
    const currentInputIndex = Array.prototype.indexOf.call(form, event.target)

    // console.log(key);
    // avoid doing something when:
    // backspace : 8 and first character
    // enter: 13
    // space : 32
    //  - : 189
    //  tab : 9
    if ((characterKey === 8 && currentInputIndex === 0) || characterKey === 32 || characterKey === 13 || characterKey === 189 || characterKey === 9)
      event.preventDefault();//Do nothing on UI


    // Avoid  writing                       //(If current index is empty and its not 0) and the character is not TAB aor space
    if ((event.target.value.length >= 1 || (event.target.value === '' && currentInputIndex !== 0)) && characterKey !== 9 && characterKey !== 32) {
      if (characterKey === 8) {  // delete when backspace
        if (currentInputIndex > 0) // avoid going to less than 0 index
          form.elements[currentInputIndex - 1].focus();

        form.elements[currentInputIndex].value = '';
        event.preventDefault(); // avoid focusing on previous when assigning empty
      } else if (currentInputIndex + 1 < form.elements.length) {
        form.elements[currentInputIndex + 1].focus(); // go to next field//input if length of characters is higher than 1 character
      } else {
        event.target.value = event.target.value.charAt(0); // writes a character if characters length is 0
        event.preventDefault();
      }
    }
  };

  matchWord = (myWord) => {
    return this.props.rightWord.toLowerCase() === myWord.toLowerCase();
  };

  getInputs() {
    this.inputs = this.props.rightWord.split('').map((ch) => { // Creating inputs// arrays vacias // for every letter of the RIGHT WORD , and since map loop requires me for a key and namey, I generate random Key and names for every imput
      return (
        <input className='game-input'
          key={Math.floor(Math.random() * 100 + 100) + ch}
          name={Math.floor(Math.random() * 100 + 100) + ch} type="text" placeholder=""
          onKeyDown={this.handleKeyDown.bind(this)} />
      )
    });

    return this.inputs;
  }

  render() {
    return (
      <div>
        <form ref={this.formRef}>
          {
            this.getInputs()
          }
        </form>
        <button className='game-button' onClick={this.handleClick}>Guess</button>
      </div>
    )
  }
}
