import React from 'react'; 
import './App.css';
import Button from './Button';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  incrementCount = (event) => {
    this.setState({counter: ++this.state.counter});
  };

  decrementCount = (event) => {
    if (this.state.counter > 0) {
      this.setState({counter: --this.state.counter});
    } 
    else {
      this.setState({counter: 0});
    }
  };

  render() {
    return (
      <div className="App"> 
          <h1 className={this.state.counter > 5 ? 'num5' : 'num6'}>{this.state.counter}</h1>
          <Button inc={this.incrementCount} dec={this.decrementCount} />
      </div>
    );
  }
}

