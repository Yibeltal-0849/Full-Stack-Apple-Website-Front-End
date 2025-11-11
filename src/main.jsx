import React, { StrictMode } from "react";
import "../src/commonResource/css/bootstrap.css";
import "../src/commonResource/css/general_css.css";
import "../src/commonResource/js/jquery-3.7.1.js";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
