/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import store from "./utils/states/redux/store/store";
import "./styles/index.css";
import App from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
