"use strict";

import React from "react";

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  fontFamily: "Arial",
  paddingLeft: ".75rem",
  paddingRight: ".75rem",
  listStyleType: "none",
  width: "90%",
  margin: "auto",
  paddingTop: ".25rem",
  paddingBottom: ".25rem",
  // textAlign: "center",
};
const ulStyle = {
  listStyleType: "none",
  color: "lightblue",
};
class PokemonStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonInfo = this.props.pokemonInfo || [];
    const pokemonAbilities = this.props.pokemonInfo.abilities || [];
    const pokemonTypes = this.props.pokemonInfo.types || [];
    const pokemonSprites = this.props.pokemonInfo.sprites || [];
    console.log("pokemonInfo: ", pokemonInfo);
    return (
      <section style={myStyle}>
        <h2> {} stats </h2>
        <hr />
        <img src={pokemonSprites.front_default} />
        <img src={pokemonSprites.back_default} />
        <img src={pokemonSprites.front_shiny} />
        <h3>Name: {pokemonInfo.name} </h3>
        <h3>Weight: {pokemonInfo.weight} </h3>
        <h3>Base Experience: {pokemonInfo.base_experience} </h3>
        <h3>ID: {pokemonInfo.id} </h3>

        <h3>
          Abilities:
          {
            <ul style={ulStyle}>
              {pokemonAbilities.map((item, i) => (
                <li key={i}>{item.ability.name} </li>
              ))}
            </ul>
          }
        </h3>
        <h3>
          Type(s):
          {
            <ol style={ulStyle}>
              {pokemonTypes.map((type, i) => (
                <li key={i}>{type.type.name} </li>
              ))}
            </ol>
          }
        </h3>
        <img src={pokemonSprites.front_shiny} />
        <img src={pokemonSprites.back_default} />
        <img src={pokemonSprites.front_default} />
      </section>
    );
  }
}

export default PokemonStats;
