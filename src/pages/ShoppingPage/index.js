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
      loading: false,
      page: 0,
      prevY: 0,
    };
  }

  componentDidMount = () => {
    debugger;
    this.setState({ loading: true });
    this.getPhotos(this.state.page + 1);
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(this.loadingRef);
  };

  handleObserver = (entities, observer) => {
    debugger;
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const curPage = this.state.initialData.length / 16;
      this.getPhotos(curPage + 1);
      this.setState({ page: curPage + 1 });
    }
    this.setState({ prevY: y });
  };

  getPhotos = (page) => {
    let data = require("../../data/products-dataset.json");
    let paginatedData = data.slice((page - 1) * 16, page * 16);
    debugger;
    let updatedSearchedData = this.state.searchedData;
    let updatedInitialData = this.state.initialData;

    updatedSearchedData.push(...paginatedData);
    updatedInitialData.push(...paginatedData);
    this.setState({
      searchedData: updatedSearchedData,
      initialData: updatedInitialData,
      loading: false,
    });
  };

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
    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

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
                labelSize={this.fetchSizes(element.sizeVariation)}
                imageSrc={element.imageUrl}
                imageAlt="No image"
                widgetClassName="widget"
              />
            );
          })}
        </div>

        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }

  fetchSizes = (sizeList) => {
    if (sizeList !== undefined) {
      let arr = sizeList.map((element) => {
        return element.title;
      });

      const reducer = (previousSizes, currentSize) =>
        previousSizes + " " + currentSize;
      const initialValue = "";
      return arr.reduce(reducer, initialValue);
    }
  };
}
export default ShoppingPage;
