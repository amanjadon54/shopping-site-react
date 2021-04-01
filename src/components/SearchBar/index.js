import React, { Component } from "react";

class SearchBar extends React.Component {
  handleEnter = (event) => {
    if (event.keyCode === 13) {
      const { handleSearchBarEnter } = this.props;
      handleSearchBarEnter(event);
    }
  };

  render() {
    return (
      <input
        className={this.props.searchBarClassName}
        placeholder={this.props.searchBarDefault}
        value={this.props.searchBarValue}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

export default SearchBar;
