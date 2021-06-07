import React, { Component } from "react";
import NavTab from "./navTab";
import "../css/dropDown.css";
import NavMenu from "./navMenu";

class DropDown extends Component {
  state = {
    name: "",
    selectionItemDatas: [],
    show: false
  };

  constructor(props) {
    super(props);

    this.state.name = props.name;
    this.state.selectionItemDatas = props.selectionItemDatas;

    this.clickHandler = this.clickHandler.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  clickHandler(e) {
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <div
        ref={this.setWrapperRef}
        className="dropDown"
        onClick={this.clickHandler}
      >
        <div>{this.state.name}</div>
        <NavMenu
          show={this.state.show}
          itemDatas={this.state.selectionItemDatas}
        />
      </div>
    );
  }
}

export default DropDown;
