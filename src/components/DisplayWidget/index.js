import React, { Component } from "react";
import Label from "../Label";
import Image from "../Image";
import "./index.css";

class DisplayWidget extends Component {
  render() {
    return (
      <div class={this.props.widgetClassName}>
        <Image
          imageSrc={this.props.imageSrc}
          imageAlt={this.props.imageAlt}
          imageClassName="imageClass"
        />
        <br></br>
        <Label
          labelClassName="label-class-title"
          labelContent={this.props.labelContent}
        />
        <br />
        <Label
          labelClassName="label-class-desc"
          labelContent={this.props.labelDescription}
        />
        <br />
        <Label
          labelClassName="label-class-size"
          labelContent={this.props.labelSize}
        />
      </div>
    );
  }
}

export default DisplayWidget;
