import { Component } from "react";
import "./App.css";

//Components Import

import List from "./components/list/list.component";
import Searchbar from "./components/searchbar/searchbar.component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result.results);
        this.setState(
          (state, props) => {
            return {
              monsters: result.results,
            };
          },
          () => {}
        );
      });
  }

  onChange = (event) => {
    this.setState(() => {
      return {
        searchInput: event.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchInput } = this.state;
    const { onChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });

    return (
      <div className="App">
        <div>
          <h1>Monster Rolodex</h1>
          <Searchbar onChange={onChange} />
          <List array={filteredMonsters} />
        </div>
      </div>
    );
  }
}
