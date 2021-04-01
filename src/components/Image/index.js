import React, { Component } from "react";

class Image extends Component {
  addDefaultSrc(ev) {
    ev.target.src = process.env.PUBLIC_URL + "/image-not-found.jpeg";
  }

  render() {
    return (
      <img
        class={this.props.imageClassName}
        src={this.props.imageSrc}
        alt={this.props.imageAlt}
        onError={this.addDefaultSrc}
      />
    );
  }
}
export default Image;
