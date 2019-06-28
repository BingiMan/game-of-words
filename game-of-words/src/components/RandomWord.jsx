import React from 'react'
import  Input  from './Input'

export default class RandomWord extends React.Component {

  
  
  render() {
    return (
      <div>
        <div>
        {this.props.word ?
          <div>
            <h1>Definition</h1>
            <h5>{this.props.word.results[0].definition}</h5>
            <li>{this.props.word.results[0].typeOf}</li>
            <h2>{this.props.word.word}</h2>
          </div>
          : null}
        </div>
        <input></input>
      </div>
    )
  }
}
// function shuffleArray(array) {
//   let i = array.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }



// {this.props.word.word ? 
//   () => {
//     let result = ''
//     let ramdomize = this.props.word.word
//     let wordLength = ramdomize.length
//     for (let i = 0; i < randomize.length; i++){
//       result += ramdomize.charAt(Math.floor(Math.random() * wordLength))
//     }
//     return result;
//   } : 'asd'}