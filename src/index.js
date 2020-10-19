import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "@/App.tsx";
import { Provider } from "mobx-react";
import store from "@/store";

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
