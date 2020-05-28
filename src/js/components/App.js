"use strict";
import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <main>
        <Form />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById("container"));
