import React from "react";
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div>
      <h1>Hello Everyone!</h1>
      <p> Welcome</p>
        <Header/>
      <Home/>
      <Footer/>  
    </div>
  );
  }
}

export default App;
