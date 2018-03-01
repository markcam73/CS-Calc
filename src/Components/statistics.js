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
            st_dev: null,
            samp_size: null,
            merge_sort: null
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
                    st_dev : jsonRes.st_dev,
                    samp_size :jsonRes.samp_size,
                    merge_sort : jsonRes.merge_sort 
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
            <center>
            <div>
                <h1>All Calculations: </h1>
                <p> Variance: {this.state.variance} </p>
                <p> Mean: {this.state.mean}</p>
                <p> Sample size: {this.state.samp_size}</p>
                <p> Standard Deviation: {this.state.st_dev}</p>
                <p> total sum:{this.state.sum} </p> 
                <p> ordered sample: {this.state.merge_sort}</p>
                                  
                <button></button>
            </div>
            </center>
        );
        var form =  ( 
                <form onSubmit={this.handleSubmit}>
                <center>
                    <label>
                        <textarea
                        placeholder = "Seperate data with spaces, enter only numbers"
                        type="text" 
                        value={this.state.data_set} 
                        onChange={this.handleChange} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </center>    
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