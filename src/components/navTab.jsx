import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavTab extends Component {
  state = {
    value: "",
    selected: false,
    link: ""
  };

  constructor(props) {
    super(props);
    this.state.value = props.value;
    this.state.link = props.link;
  }

  render() {
    return (
      <Link
        className={this.state.selected ? "selected" : "normal"}
        to={`${this.state.link}`}
      >
        {this.state.value}
      </Link>
    );
  }
}

export default NavTab;
