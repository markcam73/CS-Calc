import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Statistics from './statistics.js';

class Main extends Component{
    render(){
        console.log(this.props)
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/statistics' component={Statistics}/>
                </Switch>
            </main>
        );
    }
}

export default Main;