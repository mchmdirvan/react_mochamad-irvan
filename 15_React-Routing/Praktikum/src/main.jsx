/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import CreateProduct from "./pages/CreateProduct";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAccount from "./pages/CreateAccount";
import LandingPage from "./pages/LandingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
