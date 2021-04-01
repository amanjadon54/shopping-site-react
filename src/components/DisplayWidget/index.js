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
        <Label labelContent={this.props.labelContent} />
        <Label labelDescription={this.props.labelDescription} />
        <Label labelSize={this.props.labelSize} />
      </div>
    );
  }
}

export default DisplayWidget;
