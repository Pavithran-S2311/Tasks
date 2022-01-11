import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state ={
            user :{
                firstname : "",
                mailid : "",
                mobileno : "",
                city : ""
            }
        }
    }

    getName = (event) =>{
        let userObj = this.state.user
        userObj.firstname = event.target.value
        this.setState({
            user: userObj
        })
    }

    getMail = (event) =>{
        let userObj = this.state.user
        userObj.mailid = event.target.value
        this.setState({
            user: userObj
        })
    }

    getMobile = (event) =>{
        let userObj = this.state.user
        userObj.mobileno = event.target.value
        this.setState({
            user: userObj
        })
    }

    getCity = (event) =>{
        let userObj = this.state.user
        userObj.city = event.target.value
        this.setState({
            user: userObj
        })
    }

    print = () =>{
        alert(`Name: ${this.state.user.firstname}\nMail: ${this.state.user.mailid}\nMobile: ${this.state.user.mobileno}\nCity: ${this.state.user.city}`)
    }

   render(){
    const centerAlign = {textAlign: 'center'}
    const padding = {padding: '10px'}
   return(
      <div style={centerAlign}>
        <h1>{this.props.name}</h1>
        <div style={padding}> <label>Name : </label>
        <input type="text" name="firstname" value={this.state.user.firstname} onChange={this.getName}/></div>
        <div style={padding}>  <label>Mail : </label>
        <input type="text" name="mailid" value={this.state.user.mailid} onChange={this.getMail}/></div>
        <div style={padding}> <label>Mobile : </label>
        <input type="text" name="mobileno" value={this.state.user.mobileno} onChange={this.getMobile}/></div>
        <div style={padding}> <label>City : </label>
        <input type="text" name="city" value={this.state.user.city} onChange={this.getCity}/></div>
        <div style={padding}><button onClick={this.print}>Register</button> </div>
      </div>  
      
      );    
  }
}

export default Form;
