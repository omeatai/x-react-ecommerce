import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");

  const getPeople = async () => {
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

    setPeople(fetchResult);
  };

  getPeople();

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };

  const filterSearch = () => {
    return people.filter((person) => {
      return person.name.toLowerCase().includes(search);
    });
  };

  const searchResult = filterSearch();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          type={"search"}
          className={"app--input"}
          placeholder={"Search..."}
          value={search}
          handleSearch={(e) => handleSearch(e)}
        />
        <CardList searchResult={searchResult} />
      </header>
    </div>
  );
};
export default App;
