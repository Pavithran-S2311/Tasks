import React, { useContext }  from 'react';
import { UserContext } from './UserContext';
import C from './C';
import Java from './Java';
import Asp from './Asp';
import Python from './Python';

export default function Displaycourse() {
  const {setForm, courseDetails, setcourseDetails} = 
  useContext(UserContext);
  const leftAlign = {textAlign: 'left'};
  const padding = {padding: '10px'}

  let Courses = () => {
    return (
      <div>
        {(() => {
          switch (courseDetails.course_name) {
            case 'C':
              return <C />;
            case 'Java':
              return <Java />;
            case 'Asp':
              return <Asp />;
            case 'Python':
              return <Python />;
            default:
              return null; 
          }
        })()}
      </div>
    );
  };

  return (
    <div>
      <form>
        
        {Courses()}
        <div style={padding}>
          <label>Payment Mode : </label>
          <select name="payment_mode" value={courseDetails.payment_mode}
            onChange={(e)=>
            setcourseDetails((courseDetails)=>({ ...courseDetails, payment_mode: e.target.value})
            )}>
            <option value="Select the Payment Mode">Select</option>
            <option value="By Cash">By Cash</option>
            <option value="By Card">By Card</option>
            <option value="By UPI">By UPI</option>
          </select> </div>
        <div style={padding}>
          <button onClick={() => setForm(2)}>Previous</button>
        {' '}
        <button onClick={() => setForm(4)}> Submit </button> </div>
      </form>
     </div>
  );
}
