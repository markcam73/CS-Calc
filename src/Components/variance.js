import React, { Component } from 'react';


class Variance extends Component{
    constructor(props){
        super(props);
        this.state = {
            data_set: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        console.log(this.state);
        alert('Data Set entered: ' + this.state.data_set);
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            data_set: event.target.value
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter your Sample Data:
                        <input type="text" value={this.state.data_set} onChange={this.handleChange} />
                    </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Variance;