import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export default function Displayform () {
  const centerAlign = { textAlign: 'center' };
  const {setForm, userDetails, courseDetails} = useContext(UserContext);

return(
  <div>
    <h1 style={centerAlign}>Confirm Details</h1>
    Name : {userDetails.name} <br />
    <br />
    City : {userDetails.city} <br />
    <br />
    Country : {userDetails.country} <br />
    <br />
    Pin Code : {userDetails.pincode} <br />
    <br />
    Gender : {userDetails.gender} <br />
    <br />
    Selected Course : {courseDetails.course_name} <br />
    <br />
    Payment Mode : {courseDetails.payment_mode} <br />
    <br />
    <button  onClick={() => setForm(1)}>Back to Home</button>

  </div>

);
}