import React from 'react';
export default class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.name2}>show name</button>
        <button onClick={this.props.city2}>show city</button>
        <button onClick={this.props.age2}>show age</button>
      </div>
    );
  }
}
