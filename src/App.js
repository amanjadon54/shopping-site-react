import logo from "./logo.svg";
import SearchBar from "./components/SearchBar";
import DisplayWidget from "./components/DisplayWidget";
import Image from "./components/Image";
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  handleSearchBarEnter = (event) => {
    alert("button entered");
  };

  render() {
    return (
      <div className="App">
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
        <DisplayWidget
          labelContent="sample1"
          imageSrc={logo}
          imageAlt="No image"
          widgetClassName="widget"
        />
      </div>
    );
  }
}

export default App;
