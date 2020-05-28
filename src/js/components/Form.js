"use strict";

import React from "react";
import ReactDom from "react-dom";
import superagent from "superagent";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

//App - - manage applicataion state
//SearchForm - - collect user input and call a handleSearch function
//Searc hResults List - - display reddit pokemonInfo

//::::::::::::::::::::SearchForm::::::::::::::::::::::::::::
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
      <form onSubmit={this.handleSubmit}>
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

//::::::::::::::::::::SearchResultsList::::::::::::::::::::
//should receive reddit article and array of reddit pokemonInfo through props
class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = this.props.pokemonInfo || [];
    console.log("results: ", results);
    return (
      <ul>
        {results.map((item, i) => (
          <a key={i} href={item.move.url}>
            <li key={i}> {item.move.name} </li>
          </a>
        ))}
      </ul>
    );
  }
}

//::::::::::::::APP::::::::::::::::::::::::::::::::::::::
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchErrorMessage: null,
    };

    this.PokemonFetch = this.PokemonFetch.bind(this);
  }

  componentDidUpdate() {
    console.log("---------STATE--------- : ", this.state.results);
  }

  PokemonFetch(pokemon) {
    superagent
      .get(`${API_URL}/${pokemon}`)
      .then((res) => {
        console.log("request success", res);
        this.setState({
          results: res.body.moves,
          searchErrorMessage: null,
        });
      })
      .catch((err) => {
        console.error("ya done goofed", err);
        this.setState({
          results: null,
          searchErrorMessage: `Unable to find the pokemon ${pokemon}.`,
        });
      });
  }

  render() {
    return (
      <main>
        <h1> {this.props.title} </h1>
        <SearchForm title="Pokemon Moves" handleSearch={this.PokemonFetch} />
        <SearchResultsList pokemonInfo={this.state.results} />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById("container"));
