"use strict";
import PokemonStats from "./PokemonStats";
import React from "react";
import superagent from "superagent";

const myStyle = {
  color: "white",
  backgroundColor: "lightGrey",
  color: "DodgerBlue",
  padding: "10px",
  fontFamily: "Avantgarde",
  textAlign: "center",
  margin: "10px",
  listStyleType: "none",
};
const olStyle = {
  margin: "0px",
  padding: "0px",
};
//Search Results List - - display pokemonInfo
class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    superagent
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        console.log(posts.body);
        this.setState({ posts: posts.body });
      });
  }

  componentDidUpdate() {
    console.log("state: ", this.state);
  }

  render() {
    let results = this.props.pokemonInfo.results || [];
    let posts = this.state.posts || [];
    // console.log("Search Result List - results: ", results);
    return (
      <div>
        <section>
          <PokemonStats pokemonInfo={this.props.pokemonInfo} />
        </section>

        <ol style={olStyle}>
          {results.map((item, i) => (
            <a key={i} href={item.move.url}>
              <li key={i} style={myStyle}>
                {item.move.name}
              </li>
            </a>
          ))}
        </ol>

        <ol style={olStyle}>
          {posts.map((item, i) => (
            <a key={i}>
              <li key={i} style={myStyle}>
                {item.title}
              </li>
            </a>
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchResultsList;
