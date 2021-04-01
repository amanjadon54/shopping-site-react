import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        class={this.props.imageClassName}
        src={this.props.imageSrc}
        alt={this.props.imageAlt}
      />
    );
  }
}
export default Image;
