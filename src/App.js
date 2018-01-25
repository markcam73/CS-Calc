import React, { Component } from 'react';
<<<<<<< HEAD
import Header from './Components/header.js';
import Variance from './Components/variance.js'
=======
//import logo from './logo.svg';
>>>>>>> 59c37f74971388ed0a68cad12b9e350a58c51c9e
import './App.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        < Header />
        < Variance/>
=======
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
>>>>>>> 59c37f74971388ed0a68cad12b9e350a58c51c9e
      </div>
    );
  }
}
export default App;
