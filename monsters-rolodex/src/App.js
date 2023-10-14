import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ifeanyi", lastName: "Omeata" },
      company: "STZ",
      monsters: [
        { name: "Lindxa", id: "1" },
        { name: "Frankr", id: "2" },
        { name: "Jackoy", id: "3" },
        { name: "Adrwei", id: "4" },
      ],
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
          <h3>
            Hi, my name is {this.state.name.firstName}
            {this.state.name.lastName}. I work at {this.state.company}.
          </h3>
          <button onClick={this.handleChange}>Change Name</button>

          <h2>List of Monsters</h2>
          {this.state.monsters.map((monster) => {
            return (
              <p key={monster.id}>
                {monster.id}. {monster.name}
              </p>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
