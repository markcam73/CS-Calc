import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"statcalclogo.jpg"} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to stat calc!</h1>
        </header>
        <p className="App-intro">
          <strong>
             Let's do all the work for you, Just type in your data
          </strong>
        </p>
      </div>
    );
  }
}
export default Header;