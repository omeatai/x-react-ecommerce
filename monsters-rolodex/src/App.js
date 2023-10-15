import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      search: "",
    };
  }

  async componentDidMount() {
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
  }

  handleSearch(e) {
    const searchValue = e.target.value.toLowerCase();
    this.setState({ search: searchValue }, () => {
      console.log("Search: ", this.state.search);
    });
  }

  filterSearch() {
    const searchValue = this.state.search;
    const { people } = this.state;
    return people.filter((person) => {
      return person.name.toLowerCase().includes(searchValue);
    });
  }

  render() {
    const searchResult = this.filterSearch();
    return (
      <div className="App">
        <header className="App-header">
          <h2>List of People</h2>
          <SearchBox
            type={"search"}
            className={"app--input"}
            placeholder={"Search..."}
            value={this.state.search}
            handleSearch={(e) => this.handleSearch(e)}
          />
          <CardList searchResult={searchResult} />
        </header>
      </div>
    );
  }
}

export default App;
