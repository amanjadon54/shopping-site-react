import logo from "./logo.svg";
import SearchBar from "./components/SearchBar";
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
        ></SearchBar>
      </div>
    );
  }
}

export default App;
