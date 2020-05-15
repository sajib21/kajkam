import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import $ from "jquery";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: crimson;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function (e) {
  console.log("Removed: ", e.target.title.nodeName);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
