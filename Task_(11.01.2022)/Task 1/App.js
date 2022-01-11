import React from 'react';
import './style.css';
import Button from './Button.js';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: 'Kumar',
      city: 'Chennai',
      age: 23,
    };
  }

  showName = (event) => {
    this.setState({ name1: 'Akash' });
  };
  showCity = (event) => {
    console.log('hi');
    this.setState({ city: 'Banglore' });
  };
  showAge = (event) => {
    this.setState({ age: 25 });
  };
  render() {
    return (
      <div>
        <p>Name: {this.state.name1}</p>
        <p>City: {this.state.city}</p>
        <p>Age: {this.state.age}</p>
        <Button
          name2={this.showName}
          city2={this.showCity}
          age2={this.showAge}
        />
      </div>
    );
  }
}
// session task
//name: city age:
//display the above info in parent on a button click from child

//task : display the count in green till 5 after 5 shud be displayed in red
//should not allow negative val to be displayed
