import React, { Component } from "react";
import Label from "../Label";
import Image from "../Image";

class DisplayWidget extends Component {
  render() {
    return (
      <div>
        <Image imageSrc={this.props.imageSrc} imageAlt={this.props.imageAlt} />
        <br></br>
        <Label labelContent={this.props.labelContent} />
      </div>
    );
  }
}

export default DisplayWidget;
