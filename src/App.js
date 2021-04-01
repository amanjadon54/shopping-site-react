import logo from "./logo.svg";
import SearchBar from "./components/SearchBar";
import DisplayWidget from "./components/DisplayWidget";
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  handleSearchBarEnter = (event) => {
    alert("button entered");
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchBarDefault="search"
          handleSearchBarEnter={this.handleSearchBarEnter}
        />
        <DisplayWidget
          labelContent="sample1"
          imageSrc={logo}
          imageAlt="No image"
        />
      </div>
    );
  }
}

export default App;
