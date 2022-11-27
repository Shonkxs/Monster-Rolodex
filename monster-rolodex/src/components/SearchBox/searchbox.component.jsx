import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { eventHandler, placeholder, className } = this.props;

    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={eventHandler}
      ></input>
    );
  }
}
