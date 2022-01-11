import React from 'react';
import Display from "./Display";
class Form extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            firstname: "",
            city: "",
            showData: false 
        }
    }
    getName = (event) =>{
        this.setState({
            firstname: event.target.value
        })
        this.setState({
            showData: false
       })
    }
    getCity = (event) =>{
        this.setState({
            city: event.target.value
        })
        this.setState({
            showData: false
       })
    }
    getInputData = () =>{
        this.setState({
            showData: true
       })   
       }
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <label>Name</label>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.getName}/>
                <label>City</label>
                <input type="text" city="city" value={this.state.city} onChange={this.getCity}/>
                <button onClick={this.getInputData}>Get Name</button>
                {this.state.showData?<div>
                    <div>{this.state.firstname}</div>
                    <div>{this.state.city}</div>
                    <Display firstname={this.state.firstname}
                    city={this.state.city} />
                </div>:""}
            </div>
            );
        } 
    }

export default Form;