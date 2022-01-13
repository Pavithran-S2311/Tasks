import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: {
        cust_name: "",
        email: "",
        mobile: "",
        address: "",
        delivery_type: "",
        fruits: "" ,
        quantity: "",
        payment_mode: "",
        confirm: ""
      },
    };
  }
  getName =(event) => {
    this.setState({ cust_name: event.target.value });
  }
  getEmail =(event) => {
    this.setState({ email: event.target.value });
  }
  getMobile =(event) => {
    this.setState({ mobile: event.target.value });
  }
  getAddress =(event) => {
    this.setState({ address: event.target.value });
  }
  getDelivery =(event) => {
    this.setState({ delivery_type: event.target.value });
  }
  getFruits =(event) => {
    this.setState({ fruits: event.target.value });
  }
  getQuantity =(event) => {
    this.setState({ quantity: event.target.value });
  }
  getPayment =(event) => {
    this.setState({ payment_mode: event.target.value });
  }
  getConfirm =(event) => {
    this.setState({ confirm: event.target.value });
  }
  confirmOrder =(event) => {
    alert(
   `Customer Name: ${this.state.cust_name}\n
    Email: ${this.state.email}\n
    Mobile: ${this.state.mobile}\n
    Address: ${this.state.address}\n
    Delivery Type: ${this.state.delivery_type}\n
    Selected Fruits: ${this.state.fruits}\n
    Quantity: ${this.state.quantity}\n
    Payment Mode: ${this.state.payment_mode}
    Click to confirm: ${this.state.confirm}`);
    //event.preventDefault();
  }
  render() {
    const leftAlign = {textAlign: 'left'}
    const padding = {padding: '10px'}
  return (
    <div style={leftAlign}>
      <form onSubmit={this.confirmOrder}>
        <h1> Fruits Order Form</h1>
        <div style={padding}> <label>Customer Name : </label> 
        <input type="text" name="cust_name" value={this.state.cust_name}
            onChange={this.getName} /> </div>
        <div style={padding}> <label>Email : </label> 
        <input type="text" name="email" value={this.state.email}
            onChange={this.getEmail}/> </div>
        <div style={padding}> <label>Mobile : </label> 
        <input type="text" name="mobile" value={this.state.mobile}
            onChange={this.getMobile}/> </div>
        <div style={padding}> <label>Address : </label>
        <textarea name="address" value={this.state.address}
            onChange={this.getAddress}> </textarea> </div>
        <div style={padding} value={this.state.delivery_type} 
        onChange={this.getDelivery}> <label>Delivery Type : </label> 
        <input type="radio" name="delivery_type"
         value="Take Away"/>
        <label> Take Away</label>
        <input type="radio" name="delivery_type"
        value="Home Delivery" />
        <label> Home Delivery</label></div>
        <div style={padding}> <label>Select Fruits : </label>
        <select name="Select Fruits"  value={this.state.fruits}
            onChange={this.getFruits} >
          <option value="Select the fruits">Select</option>
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
          <option value="Mango">Mango</option>
          <option value="Banana">Banana</option></select></div>
        <div style={padding}> <label>Quantity : </label> 
        <input type="text" name="quantity" value={this.state.quantity}
            onChange={this.getQuantity} /> </div>
        <div style={padding}> <label>Payment Mode : </label>
        <select name="payment_mode"  value={this.state.payment_mode}
            onChange={this.getPayment} >
          <option value="Select the mode of payment">Select</option>
          <option value="By Cash">By Cash</option>
          <option value="By Card">By Card</option></select></div>
          <div style={padding}><label>Confirm : </label>
          <input type="checkbox" name="confirm" value="confirm"
         onChange={this.getConfirm}/></div>
        <div style={padding}><input type="submit" value="Confirm Order"/></div>
      </form>
    </div>
  );
  }
}
