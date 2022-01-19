import React, { createContext, useState } from 'react';
export const UserContext = createContext();
export const FormContext = (props) => {
  const [userDetails, setuserDetails] = useState({
    name: '',
    city: '',
    country:'',
    address: '',
    pincode: '',
    gender: '',
  });
  
  const [courseDetails, setcourseDetails] = useState({ 
    course_name: '', 
    payment_mode: '' 
  });

  const [currentForm, setForm] = useState(1);
  return (
    <div>
      <UserContext.Provider value = {
          {userDetails, setuserDetails,
          courseDetails, setcourseDetails,
          currentForm, setForm}
        }>
          {props.children}
      </UserContext.Provider>
    </div>
  );
};