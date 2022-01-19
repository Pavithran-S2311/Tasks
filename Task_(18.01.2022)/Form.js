import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Form() {
  const {setForm, userDetails, setuserDetails} = useContext(UserContext);
  const leftAlign = { textAlign: 'left' };
  const centerAlign = { textAlign: 'center' };
  const padding = { padding: '10px' };
  return (
    <div style={leftAlign}>
      <form>
        <h1 style={centerAlign}> Personal Details </h1>
        <div style={padding}>
          <label>Name : </label>
          <input type="text" value={userDetails.name}
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            name: e.target.value }))
            } />
        </div>
        <div style={padding}>
          <label>City : </label>
          <select value={userDetails.city}
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            city: e.target.value }))
            }>
            <option value="Select the City name">Select</option>
            <option value="Chennai">Chennai</option>
            <option value="Banglore">Banglore</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        <div style={padding}>
          <label>Country : </label>
          <select value={userDetails.country}
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            country: e.target.value }))
            }>
            <option value="Select the Country name">Select</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
          </select>
        </div>
        <div style={padding}>
          <label>Address : </label>
          <textarea value={userDetails.address}
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            address: e.target.value }))
            }> </textarea>
        </div>
        <div style={padding}>
          <label>Pincode : </label>
          <input type="text" value={userDetails.pincode}
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            pincode: e.target.value }))
            } />
        </div>
        <div style={padding}>
          <label>Gender : </label>
          <input type="radio" name="gender" value="Male"
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            gender: e.target.value }))
          } />
          <label> Male </label>
          <input type="radio" name="gender" value="Female"
            onChange={(e) =>
            setuserDetails((userDetails) => ({ ...userDetails, 
            gender: e.target.value }))
          } />
          <label> Female </label>
        </div>
        <div style={padding}>
        <button  onClick={() => setForm(2)}>Next</button>
        </div>
      </form>
    </div>
  );
}
