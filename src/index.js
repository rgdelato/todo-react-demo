import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import TodosPage from "./pages/TodosPage";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <TodosPage />
  </BrowserRouter>,
  document.getElementById("root")
);
