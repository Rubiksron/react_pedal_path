"use strict";

import React from "react";
import superagent from "superagent";
import SearchForm from "./SearchForm";
import SearchResultsList from "./SearchResultsList";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

//App - - manage applicataion state
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchErrorMessage: null,
      weight: 0,
      id: 0,
    };

    this.PokemonFetch = this.PokemonFetch.bind(this);
  }

  componentDidUpdate() {
    console.log("---------STATE--------- : ", this.state);
  }

  PokemonFetch(pokemon) {
    superagent
      .get(`${API_URL}/${pokemon}`)
      .then((res) => {
        console.log("res.body - success: ", res.body);
        this.setState({
          results: res.body.moves,
          searchErrorMessage: null,
          weight: res.body.weight,
          name: res.body.name,
          id: res.body.id,
          abilities: res.body.abilities || [],
          base_experience: res.body.base_experience,
          types: res.body.types || [],
        });
      })
      .catch((err) => {
        console.error("ya done goofed", err);
        this.setState({
          results: null,
          searchErrorMessage: `Unable to find the pokemon ${pokemon}.`,
        });
        alert(this.state.searchErrorMessage);
      });
  }

  render() {
    return (
      <main>
        <h1> {this.props.title} </h1>
        <SearchForm title="Search: " handleSearch={this.PokemonFetch} />
        <SearchResultsList pokemonInfo={this.state} />
      </main>
    );
  }
}

export default Form;
