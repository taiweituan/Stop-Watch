import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      timer: 0
    };
    this.interval = () => {};
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStart(){
    console.log('start');
    this.interval = setInterval(()=> {
      let currentTimer = this.state.timer;
      this.setState({
        timer: currentTimer+1
      });
    }, 1000);
  }
  handleStop(){
    console.log('stop');
    clearInterval(this.interval);
  }

  handleReset() {
    console.log('reset');
    this.setState({
      timer: 0
    });
  }
  render() {
    return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h2>{this.state.timer}</h2>
      <button onClick={
        this.handleStart
      }>Start</button>
      <button onClick={this.handleStop}>Stop</button>
      <button onClick={this.handleReset}>Reset</button>
    </div>
  );
}
}

export default App;

