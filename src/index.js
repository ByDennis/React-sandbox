import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { getPath } from "./tool";
import CompA from "./state2props";

function App() {
  console.log(
    "=====>>>",
    getPath(
      { level1: { level2: { level3: { level4: 1 } } } },
      "level1.level2.level3"
    )
  );
  return (
    <div className="App">
      <h1>Hello</h1>
      <CompA />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
