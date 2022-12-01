import { Component } from "react";
import "./list.style.css";

export default class List extends Component {
  render() {
    const { array } = this.props;
    array.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    let count = 0;
    return (
      <div className="list-container">
        {array.map((item) => {
          return (
            <div key={count++} className="list-item">
              <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
              <a
                href={"https://www.pokewiki.de/" + item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zum Monster
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
