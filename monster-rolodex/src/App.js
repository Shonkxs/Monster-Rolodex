import { Component } from "react";
import "./App.css";

//Import Components
import List from "./components/List/list.component";
import SearchBox from "./components/SearchBox/searchbox.component";

export default class App extends Component {
  constructor() {
    //Aufruf von super um .this verwenden zu kömmen
    super();
    // Erstellend es State Objects
    this.state = {
      searchInput: "",
      title: "Monster Rolodex",
      monsters: [],
    };
  }

  // Beim Plazieren der Componente sollen die User aus der Fake API gefetcht werden
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        this.setState(() => {
          return {
            monsters: response,
          };
        });
      });
  }

  //Eventhandler
  onInputChange = (event) => {
    this.setState(() => {
      return {
        searchInput: event.target.value.toLowerCase(),
      };
    });
  };

  render() {
    //State Constanten
    const { title, monsters, searchInput } = this.state;

    //Eventhandler Constanten
    const { onInputChange } = this;

    //App Values (Werte die in der ganzen App benutzt werden können)
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput);
    });

    return (
      <div className="App">
        <h1 class="title">{title}</h1>
        <SearchBox
          className="search-box"
          placeholder="Suche nach Monstern"
          eventHandler={onInputChange}
        />
        <List monsters={filteredMonsters} className="flex-list" type="card" />
      </div>
    );
  }
}
