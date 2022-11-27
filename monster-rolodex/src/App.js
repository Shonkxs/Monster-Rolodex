import { Component } from "react";
import "./App.css";

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
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h3>{monster.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
