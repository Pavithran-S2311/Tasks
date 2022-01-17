import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userImage: [],
      userImage1: [],
    };
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userImage: json.data,
        });
      });
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userImage1: [...this.state.userImage, ...json.data],
        });
      });
    console.log(this.state.userImage);
  }

  render() {
    return (
      <div>
        <h1> Personal Details:</h1>
        {this.state.userImage1
          .map((x) => (
            <p key={x.id}>
              <img src={x.avatar} /> <br />
              Name: {x.first_name} <br />
              Email: {x.email}
            </p>
          ))
          .slice(0, 10)}
      </div>
    );
  }
}
