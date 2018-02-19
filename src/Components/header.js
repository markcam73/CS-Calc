import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: ""
    }
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value)
  }

  handleSubmit = (event) => {
    if (this.state.value === ""){
      event.preventDefault();
      return;
    }
    this.props.history.push("/" + this.state.value);
    event.preventDefault();
  }

  goHome = () =>{
    this.props.history.replace("/");
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={"statcalclogo.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to stat calc!</h1> 
          <button style = {{height: '30px'}} onClick={this.goHome}>Home</button>
        </header>
        <div className="App-intro">
          <form onSubmit={this.handleSubmit}>
            <label>
              Select Calculator:
              <select defaultValue={this.state.value} onChange={this.handleChange}>
                <option value=""> </option>
                <option value="statistics">Statistics</option>
                <option value="calculus">Calculus</option>
                <option value="asymptotic_complexity">Asymptotic Complexity</option>
              </select>
            </label>
            <input type = "submit" value = "Select" />
          </form>
        </div>
      </div>
    );
  }
}

export default Header;