import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";

import "./index.css";

ReactDOM.render(
  (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  ),
  document.getElementById("root")
);
