import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    const handleChange = async () => {
      const fetchResult = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => Promise.resolve(data))
        .catch((res) => console.error(res.status));

      this.setState({ people: fetchResult }, () => {
        console.log("State: ", this.state);
      });
    };

    handleChange();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>List of People</h2>
          {this.state.people ? null : (
            <div>
              <p
                style={{ color: "red", fontSize: "42px", fontWeight: "bolder" }}
              >
                Error Fetching Data....
              </p>
            </div>
          )}
          {!this.state.people ? null : this.state.people.length > 0 ? (
            this.state.people.map((person) => {
              return (
                <p key={person.id}>
                  {person.id}. {person.name}
                </p>
              );
            })
          ) : (
            <div>
              <p>No Users Available</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
