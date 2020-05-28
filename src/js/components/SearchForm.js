"use strict";

import React from "react";

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  margin: "10px",
};
//SearchForm - - collect user input and call a handleSearch function
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonSearched: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      pokemonSearched: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.pokemonSearched);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={myStyle}>
        <label> {this.props.title} </label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.pokemonSearched}
        />
        <button type="submit"> search </button>
      </form>
    );
  }
}

export default SearchForm;
