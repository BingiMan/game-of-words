import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import RandomWord from './components/RandomWord'
import { Home } from './components/Home'
import { fetchData } from './service/word-api'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: null,
    }
  }

  fetchWord = async () => {
    const data = await fetchData();
    if (!data.results) {
      this.fetchWord();
      return;
    }
    this.setState({
      word: data
    })
  }

  componentDidMount = () => {
    this.fetchWord();
  }


  render() {
    return (
      <div className="App" >
        <header>
          <h1>Hello >:D </h1>
          <Link to="/">Home</Link>
          <Link to="/game-of-words">Game of Words</Link>
          <Link to="/under-construction">Magic</Link>
        </header>
        <main>
        <Route exact path="/" render={Home} />
        <Route exact path="/game-of-words" render={() =><RandomWord word={this.state.word} />} />
          
        </main>
        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
