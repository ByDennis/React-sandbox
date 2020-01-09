import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { getPath } from "./tool";
import CompA from "./state2props";
import { Example, Comment } from "./hooks";
function App() {
  console.log(
    "=====>>>",
    getPath(
      { level1: { level2: { level3: { level4: 1 } } } },
      //["level1", "level2", "level3"]
      "level1.level2.level3"
    )
  );
  return (
    <div className="App">
      <Example />
      {/* <CompA /> */}
      <Comment />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
