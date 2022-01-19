import React, {useContext} from 'react';
import './style.css';
import Form from './Form';
import Selectcourse from './Selectcourse';
import Displaycourse from './Displaycourse';
import Displayform from './Displayform';
import {UserContext} from './UserContext'

export default function App() {
  const { currentForm } = useContext(UserContext);
  function showForm(form) {
    switch (form) {
      case 1:
        return <Form />;
      case 2:
        return <Selectcourse />;
      case 3:
        return <Displaycourse />;
      case 4:
        return <Displayform />;
    }
  }
  return (
    <div>
      
        {showForm(currentForm)}
    </div>
  );
}
