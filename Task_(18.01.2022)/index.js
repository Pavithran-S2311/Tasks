import React from "react";
import ReactDOM from "react-dom";
import { FormContext } from './UserContext';
import App from "./App";

ReactDOM.render(
  <FormContext>
    <App />
  </FormContext>, document.getElementById("root"));
