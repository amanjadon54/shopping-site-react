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
          imageClassName="widgetClass"
        />
        <br></br>
        <Label labelContent={this.props.labelContent} />
      </div>
    );
  }
}

export default DisplayWidget;
