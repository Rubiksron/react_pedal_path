import React, { Component } from "react";
import ReactDOM from "react-dom";
import superagent from "superagent";

const API_URL = "https://pokeapi.co/api/v2/pokemon/gengar";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      results: "",
      value: "",
      message: "hell, low whirled",
    };

    this.handleChange = this.handleChange.bind(this);
    this.goGetPokemon = this.goGetPokemon.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  goGetPokemon(board) {
    superagent
      .get(`${API_URL}`)
      .then((res) => {
        console.log("request success: ", res.body.abilities[0]);
        this.setState({
          results: res.body.abilities[0],
          searchErrorMessage: null,
        });
        console.log("results: ", this.state.results);
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          results: null,
          searchErrorMessage: `Unable to find the reddit board ${board}.`,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="text goes here..."
            autoFocus={true}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        Value from state object: <p>{this.state.value}</p>
        Ability name: <p>{this.state.results}</p>
        {/* <ul>
          {results.map((item, i) => (
            <li key={i}>
              <a href={item.data.url}> {item.data.title} </a>
            </li>
          ))}
        </ul> */}
        <button onClick={this.goGetPokemon}>pokemon</button>
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
