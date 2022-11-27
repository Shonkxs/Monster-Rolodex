import { Component } from "react";
import "./list.component.css";

export default class List extends Component {
  render() {
    const { monsters, className, type } = this.props;
    return (
      <div className={className}>
        {monsters.map((monster) => {
          return (
            <div className={type} key={monster.id}>
              <h3>{monster.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
