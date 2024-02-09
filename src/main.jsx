import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./Styles/reset.css"
import "./Styles/fonts.css"
import "./Styles/variables.css"
import "./Styles/helpers.css"
import "./Styles/defaults.css"



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
    
  </BrowserRouter>
);
