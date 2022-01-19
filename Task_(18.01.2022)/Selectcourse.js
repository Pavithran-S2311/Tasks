import React, { useContext } from 'react';
import {UserContext} from './UserContext';

export default function Selectcourse() {
  const {setForm, courseDetails, setcourseDetails} = 
    useContext(UserContext);
  const leftAlign = {textAlign: 'left'};
  const centerAlign = { textAlign: 'center' };
  const padding = {padding: '10px'}
  return (
    <div>
      <form>
      <h1 style={centerAlign}> Courses Provided </h1>
        <div style={leftAlign} style={padding}>
          <label>Courses to be selected : </label></div>
          <div style={padding}>
          <input type="radio" name="course_name" value="C"  
            onChange={(e) =>
            setcourseDetails((courseDetails) => ({ ...courseDetails, course_name: e.target.value }))
          }/>
          <label> C </label>
          <input type="radio" name="course_name" value="Java"  
            onChange={(e) =>
            setcourseDetails((courseDetails) => ({ ...courseDetails, course_name: e.target.value }))
          }/>
          <label> Java </label>
          <input type="radio" name="course_name" value="Asp"  
            onChange={(e) =>
            setcourseDetails((courseDetails) => ({ ...courseDetails, course_name: e.target.value }))
          }/>
          <label> Asp </label>
          <input type="radio" name="course_name" value="Python"  
            onChange={(e) =>
            setcourseDetails((courseDetails) => ({ ...courseDetails, course_name: e.target.value }))
          }/>
          <label> Python </label>
        </div>
        <div style={padding}><label>Selected Course : </label>
          <input type="text" value={courseDetails.course_name}/></div>
        <div style={padding}>
        <button onClick={() => setForm(1)}> Previous </button>{' '}
        <button  onClick={() => setForm(3)} >Next </button>
        </div>
      </form>
      </div>
  );
}
