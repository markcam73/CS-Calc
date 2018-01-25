import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"statcalclogo.jpg"} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to stat calc!</h1>
        </header>
        <body>
        <p className="App-intro">
         <strong>
           Let's do all the work for you, Just type in your data
         </strong>
        </p>
          <form name = "input" action = "" method = "get">
            input: <input type= "text" name= "input" value=""></input>
            <input type= "submit" value="Submit"></input>
          </form>
        </body>
      </div>
    );
  }
}
export default App;
