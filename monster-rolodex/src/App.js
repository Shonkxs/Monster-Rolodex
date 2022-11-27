import { Component } from "react";
import "./App.css";

//Import Components
import List from "./components/list.component";

export default class App extends Component {
  constructor() {
    //Aufruf von super um .this verwenden zu kömmen
    super();
    // Erstellend es State Objects
    this.state = {
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

  render() {
    const { title, monsters } = this.state;

    return (
      <div className="App">
        <h1>{title}</h1>
        <List monsters={monsters} className="list" />
      </div>
    );
  }
}
