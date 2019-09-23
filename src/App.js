import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bob from './bob.js';
import Hank from './hank.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrangement: 'default',
      view: 'standard',
      dataPoints: [
        1.0, 2.76, 9.831, 1.022, 3.14, 7.165
      ],
      areaOfOccupation: "No Man's Land",
      activePage: 'landing',
      displayHank: true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Hank areaOfOccupation={this.state.areaofOccupation}/>

          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Bob dataPoints={state.dataPoints}/>
        </header>
      </div>
    );
  }
}
