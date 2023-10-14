import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ifeanyi", lastName: "Omeata" },
      company: "STZ",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(
      {
        name:
          this.state.name.firstName === "Ifeanyi"
            ? { firstName: "Mark", lastName: "Weber" }
            : { firstName: "Ifeanyi", lastName: "Omeata" },
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          <h3>
            Hi, my name is {this.state.name.firstName}
            {this.state.name.lastName}. I work at {this.state.company}.
          </h3>
          <button onClick={this.handleChange}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
