/* globals React,ReactDOM */
// import React from "react";
// import { ReactDOM } from "react";

const App = () => {
  return React.createElement("h1", {}, "Reactive");
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
