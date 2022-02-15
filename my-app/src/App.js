import React, { Component } from 'react';
import GetButtonCount from './GetButtonCount';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>React button Count</h2>
        </div>
        <GetButtonCount />
      </div>
    );
  }
}
export default App;
