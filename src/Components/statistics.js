import React, { Component } from 'react';
import API from '../API.js';

class Statistics extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: "",
            variance: null,
            sum : null,
            mean: null,
            st_dev: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        console.log(this.state);
        var payload = {data: this.state.data}
        API.postRequest(payload,'/variance').then((jsonRes) => {
            if (jsonRes.status===200){
                console.log(jsonRes)
                this.setState({
                    variance : jsonRes.variance,
                    mean : jsonRes.mean,
                    sum : jsonRes.sum,
                    st_dev : jsonRes.st_dev
                })
                console.log(this.state)
            }
        })
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            data: event.target.value
        });
    }
    render(){
        var content = (
            <div>
                <h1> This is your calculated variance: {this.state.variance} </h1>
                <h1> Mean: {this.state.mean}</h1>
                
                <button></button>
            </div>
        );
        var form =  (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter your Sample Data:
                        <input type="text" value={this.state.data_set} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        );
        return(
            <div>
                {this.state.variance != null ? content : form}   
            </div>
        );
    }
}

export default Statistics;