import React, { Component } from 'react';
import Header from './Components/header.js';
import Main from './Components/main.js'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        < Header history= {this.props.history} />
        < Main history= {this.props.history}/>
      </div>
    );
  } 
}
export default App;
