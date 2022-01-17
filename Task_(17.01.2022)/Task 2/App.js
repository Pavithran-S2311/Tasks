import React, {useState} from "react";
import "./style.css";

export default function App() {

  const[person,setPerson] = useState({
    name1: "Kumar",
    age: 22,
    city: "Chennai"
  } );
  
  return (
    <div>
      <h1>Name: {person.name1} <br/> 
      Age: {person.age} <br/>
       City: {person.city} </h1>
      <button onClick={()=>setPerson({
        name1: "Ajay",
        age: 23,
        city: "Banglore" 
      } )}>Update Details</button>
      
    </div>
  );
}
