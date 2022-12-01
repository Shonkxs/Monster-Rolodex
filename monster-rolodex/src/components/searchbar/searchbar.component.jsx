import { Component } from "react";
import "./searchbar.style.css";

export default class Searchbar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <input
        onChange={onChange}
        type="search"
        placeholder="Suche etwas"
        className="search-bar"
      />
    );
  }
}
