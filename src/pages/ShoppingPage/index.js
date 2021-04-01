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
      initialData: [],
      searchedData: [],
    };
    var data = require("../../data/products-dataset.json");
    this.state.searchedData = data;
    this.state.initialData = data;
  }

  handleSearchBarEnter = (event) => {
    const searchData = event.target.value;
    const { initialData } = this.state;
    let updatedList = [];
    if (searchData === "") {
      updatedList = initialData;
    } else {
      updatedList = initialData.filter((element) =>
        element.title.includes(searchData)
      );
    }

    this.setState({ searchedData: updatedList });
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

        <div class="widgets-div">
          {this.state.searchedData.map((element) => {
            return (
              <DisplayWidget
                labelContent={element.title}
                labelDescription={element.subTitle}
                // labelSize={element.sizeVariation}
                imageSrc={element.imageUrl}
                imageAlt="No image"
                widgetClassName="widget"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default ShoppingPage;
