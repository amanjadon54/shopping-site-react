import React, { Component } from "react";

class Label extends Component {
  render() {
    return (
      <label
        className={this.props.labelClassName}
        data-content={this.props.labelContent}
      >
        {this.props.labelContent}
      </label>
    );
  }
}

export default Label;
