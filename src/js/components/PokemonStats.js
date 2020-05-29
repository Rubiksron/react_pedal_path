"use strict";

import React from "react";

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  fontFamily: "Arial",
  paddingLeft: "2rem",
  listStyleType: "none",
  width: "100%",
  margin: "auto",
  paddingTop: ".25rem",
  paddingBottom: ".25rem",
};
const ulStyle = {
  listStyleType: "none",
};
class PokemonStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonInfo = this.props.pokemonInfo || [];
    const pokemonAbilities = this.props.pokemonInfo.abilities || [];
    const pokemonTypes = this.props.pokemonInfo.types || [];
    console.log("pokemonInfo: ", pokemonInfo);
    return (
      <section style={myStyle}>
        <h2> -Pokemon Stats- </h2>
        <h3>name: {pokemonInfo.name} </h3>
        <h3>weight: {pokemonInfo.weight} </h3>
        <h3>base experience: {pokemonInfo.base_experience} </h3>
        <h3>id: {pokemonInfo.id} </h3>
        <h3>
          abilities:
          {
            <ol style={ulStyle}>
              {pokemonAbilities.map((item, i) => (
                <li key={i}>{item.ability.name} </li>
              ))}
            </ol>
          }
        </h3>
        <h3>
          type(s):
          {
            <ol style={ulStyle}>
              {pokemonTypes.map((type, i) => (
                <li key={i}>{type.type.name} </li>
              ))}
            </ol>
          }
        </h3>
      </section>
    );
  }
}

export default PokemonStats;
