/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import React from "react";

import CreateProduct from "./pages/CreateProduct";
import CreateAccount from "./pages/CreateAccount";
import LandingPage from "./pages/LandingPage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
