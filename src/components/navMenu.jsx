import React, { Component } from "react";
import "../css/navMenu.css";
import NavTab from "./navTab";

class NavMenu extends Component {
  state = {
    itemDatas: [],
    show: false
  };

  constructor(props) {
    super(props);
    this.state.itemDatas = props.itemDatas;
    this.state.show = props.show;
  }

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  render() {
    return (
      <div className={"menu " + (this.state.show ? "show" : "hide")}>
        {this.state.itemDatas.map(itemData => (
          <NavTab
            key={itemData.name}
            link={itemData.link}
            value={itemData.name}
          />
        ))}
      </div>
    );
  }
}

export default NavMenu;
