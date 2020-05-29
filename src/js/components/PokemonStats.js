"use strict";

import React from "react";

const myStyle = {
  color: "white",
  backgroundColor: "lightblue",
  color: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  margin: "10px",
  listStyleType: "none",
};

class PokemonStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonInfo = this.props.pokemonInfo.results;
    console.log("pokemonInfo: ", pokemonInfo);
    return (
      <section style={myStyle}>
        <p>name: {this.props.pokemonInfo.name} </p>
        <p>weight: {this.props.pokemonInfo.weight} lbs.</p>
        <p>id: {this.props.pokemonInfo.id}</p>
      </section>
    );
  }
}

export default PokemonStats;
