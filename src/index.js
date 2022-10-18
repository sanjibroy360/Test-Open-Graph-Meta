import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate } from "react-dom";
import AppContainer from "AppContainer";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<AppContainer />, rootElement);
} else {
  root.render(<AppContainer />);
}
