import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ifeanyi",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          <h3>Hi, my name is {this.state.name}</h3>
        </header>
      </div>
    );
  }
}

export default App;
