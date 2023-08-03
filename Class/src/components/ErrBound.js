import { Component } from "react";

class ErrBound extends Component {
  constructor() {
    super();
    this.state = {
      hasErr: false,
    };
  }
  componentDidCatch() {
    this.setState({ hasErr: true });
  }

  render() {
    return this.state.hasErr ? <p>Error Occured!</p> : this.props.children;
  }
}

export default ErrBound;
