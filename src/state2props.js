import React from "react";
import _ from "lodash";

class ComB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customComment: {
        color: "",
        content: ""
      }
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { comment } = nextProps;
    if (!_.isEqual(comment, prevState.customComment)) {
      console.log("===>", nextProps, prevState);
      return {
        customComment: comment
      };
    }
    return null;
  }
  render() {
    const { customComment } = this.state;
    return <ComC {...{ customComment }} />;
  }
}

class ComC extends React.Component {
  render() {
    const { customComment } = this.props;
    return (
      <div style={{ color: customComment.color }}>
        <span>{customComment.content}</span>
      </div>
    );
  }
}
class CompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        color: "red",
        content: "this is a comment"
      }
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        comment: {
          color: "blue",
          content: "this is a comment!!!!!"
        }
      });
    }, 3000);
  }
  render() {
    const { comment } = this.state;
    return <ComB comment={comment} />;
  }
}

export default CompA;
