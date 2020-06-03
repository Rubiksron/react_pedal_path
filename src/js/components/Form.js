"use strict";

// require("dotenv").config();
import React from "react";
import superagent from "superagent";
import SearchForm from "./SearchForm";
import SearchResultsList from "./SearchResultsList";
import Pokemon from "./Pokemon";
// import pg from "pg";
// const client = new pg.Client(
//   "postgres://rondunphy:serone@localhost:5432/pokemon"
// );
// client.on((err) => console.error("You broke postgreSQL! in Form.js: ", err));

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
    // console.log("---------STATE--------- : ", this.state);
  }

  PokemonFetch(pokemon) {
    // console.log("hello?", process.env.DATABASE_URL);
    console.log("PokemonFetch arguement: ", pokemon);
    //check to see if the pokemon is already in the database, and if not then search the API

    // const SQL = `SELECT * FROM pokemon WHERE (name='${pokemon}') RETURNING name;`;
    // client.query(SQL).then((name) => console.log("looking for name: ", name));

    superagent
      .get(`${API_URL}/${pokemon}`)
      .then((res) => {
        const { name, weight, id, base_experience } = res.body;
        var newPokemon = new Pokemon(name, weight, id, base_experience);

        this.setState({
          results: res.body.moves,
          searchErrorMessage: null,
          weight: res.body.weight,
          name: res.body.name,
          id: res.body.id,
          abilities: res.body.abilities || [],
          base_experience: res.body.base_experience,
          types: res.body.types || [],
          sprites: res.body.sprites,
        });

        return newPokemon;
      })
      .then((newPokemon) => {
        console.log("newPokemon: ", newPokemon);
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
