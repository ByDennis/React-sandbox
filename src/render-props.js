import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ComA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 10,
        b: 20
      });
    }, 5000);
  }
  render() {
    return this.props.render(this.state);
  }
}
class ComB extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("B", this.props);
    return null;
  }
}
class ComC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("C", this.props);
    return null;
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ComA
        render={payload => {
          return (
            <div>
              <ComB {...payload} />
              <ComC {...payload} />
            </div>
          );
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
