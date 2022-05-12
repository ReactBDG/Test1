// const InputElement = (props) => {
//     return <input type="text" value={props.samo} onChange={props.onChange} />;
// }

// export default InputElement

import React, { Component } from "react";
import { CompButton } from "./CompButton";

export default class InputElement extends Component {
  state = {
    value: "",
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };

  handleAdd = () =>  {
    this.setState({ value: "" });
    this.props.handleAddParent(this.state.value);
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {/* <button onClick={}>ADD </button> */}
        <CompButton onClick={this.handleAdd} />
      </>
    );
  }
}
