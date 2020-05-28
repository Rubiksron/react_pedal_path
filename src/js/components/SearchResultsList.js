"use strict";

import React from "react";

const myStyle = {
  color: "white",
  backgroundColor: "lightGrey",
  color: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  margin: "10px",
  listStyleType: "none",
};
//Search Results List - - display pokemonInfo
class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = this.props.pokemonInfo || [];
    console.log("SRL-results: ", results);
    return (
      <ul>
        {results.map((item, i) => (
          <a key={i} href={item.move.url}>
            <li key={i} style={myStyle}>
              {" "}
              {item.move.name}{" "}
            </li>
          </a>
        ))}
      </ul>
    );
  }
}

export default SearchResultsList;
