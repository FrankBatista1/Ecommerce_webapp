import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EcommerceApp from "./app/layout/EcommerceApp";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommerceApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
