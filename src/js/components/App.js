"use strict";
import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";

const myStyle = {
  width: "100%",
  margin: "auto",
};

class App extends React.Component {
  render() {
    return (
      <main style={myStyle}>
        <Form />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById("container"));
