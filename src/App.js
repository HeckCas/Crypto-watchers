import React, { Component } from 'react';
import Tickers from './components/Tickers.js';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Criptocurrency Ticker</h2>

        </div>
        < Tickers />
      </div>
    );
  }
}

export default App;
