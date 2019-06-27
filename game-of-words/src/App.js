import React from 'react';
import './App.css';
import { fetchData } from './service/word-api'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }



  componentDidMount = async () => {
    const data = await fetchData();
    this.setState({
      data: data
    })
    console.log(this.state.data)
  }


  render() {
    return (
      <div className="App" >
        
      </div>
    );
  }
}

export default App;
