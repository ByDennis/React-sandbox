class ComA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    };
    window.addEventListener("scroll", this.onScrollHandle);
  }
  callback = () => {
    console.log("this is callback!!!!!");
  };
  onScrollHandle = () => {
    return this.callback();
  };
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
    console.log("B Updated:", this.props);
    return null;
  }
}
class ComC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("C Updated:", this.props);
    return null;
  }
}