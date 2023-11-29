/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import { TokenProvider } from "./utils/states/contexts/token-context";
import store from "./utils/states/redux/store/store";
import App from "./routes/index";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TokenProvider>
      <App />
    </TokenProvider>
  </Provider>
);
