import React from 'react';
import './App.css';
import { fetchData } from './service/word-api'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: [],
    }
  }



  componentDidMount = async () => {
    debugger;
    const data = await fetchData();
    this.setState({
      word: data
    })
    console.log(this.state.word[0].shortdef[0])
    debugger
  }
  

  render() {
    return (
      <div className="App" >
          {/* {this.state.word[0].map(descrip => (
            <div key={descrip.id}>
              <h2>{descrip.hwi.hw}</h2>
              <h3>{descrip.shortdef[0]}</h3>
            </div>
          ))} */}
        <p>{this.state.word[0].shortdef[0]}</p>
        
      </div>
    );
  }
}

export default App;
