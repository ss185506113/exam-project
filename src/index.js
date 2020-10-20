import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import App from "@/App.tsx";
import { Provider } from "mobx-react";
import store from "@/store";

import "./index.scss";
import "@/assets/css/login.scss";
import "@/assets/css/userAdd.scss";

console.log(store);
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
