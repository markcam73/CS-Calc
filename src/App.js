import React, { Component } from 'react';
import Header from './Components/header.js';
import Variance from './Components/variance.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < Variance/>
      </div>
    );
  }
}
export default App;
