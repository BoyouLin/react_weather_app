import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
