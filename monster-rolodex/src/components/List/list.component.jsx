import { Component } from "react";

export default class List extends Component {
  render() {
    const { monsters, className } = this.props;
    return (
      <div className={className}>
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
