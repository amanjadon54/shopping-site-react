import "./App.css";
import ShoppingPage from "./pages/ShoppingPage";
import React, { Component } from "react";

class App extends Component {
  handleSearchBarEnter = (event) => {
    alert("button entered");
  };

  render() {
    return <ShoppingPage />;
  }
}
export default App;
