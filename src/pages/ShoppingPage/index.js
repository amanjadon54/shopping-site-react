import logo from "../../logo.svg";
import SearchBar from "../../components/SearchBar";
import DisplayWidget from "../../components/DisplayWidget";
import Image from "../../components/Image";
import React, { Component } from "react";

import "./index.css";

class ShoppingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingData: [],
    };
    var data = require("../../data/products-dataset.json");
    this.state.shoppingData = data;
  }

  handleSearchBarEnter = (event) => {
    alert("button entered");
  };

  render() {
    return (
      <div class="shopping-page">
        <Image
          imageSrc={process.env.PUBLIC_URL + "/company_logo.svg"}
          imageClassName="company-logo"
        />
        <hr />
        <SearchBar
          searchBarDefault="search"
          searchBarClassName="search"
          handleSearchBarEnter={this.handleSearchBarEnter}
        />

        {this.state.shoppingData.map((element) => {
          return (
            <DisplayWidget
              labelContent={element.title}
              labelDescription={element.subTitle}
              labelSize={element.sizeVariation}
              imageSrc={element.imageUrl}
              imageAlt="No image"
              widgetClassName="widget"
            />
          );
        })}
      </div>
    );
  }
}
export default ShoppingPage;
