import React, { Component } from "react";
import "../css/navBar.css";
import NavTab from "./navTab";
import DropDown from "./dropDown";
import SelectionItemData from "../dto/selectionItemData";

class NavBar extends Component {
  state = {
    plantsTabOptions: [
      new SelectionItemData("Plants Menu", "/plantsMenu"),
      new SelectionItemData("Create New Plant", "/createNewPlant")
    ],
    attractionsTabOptions: [
      new SelectionItemData("Attractions Menu", "/attractionsMenu"),
      new SelectionItemData("Create New Attraction", "/createNewAttraction")
    ]
  };

  render() {
    return (
      <div className="navBar">
        <div className="logo">
          {" "}
          <NavTab link="/" value="logo" />{" "}
        </div>
        <div className="tabsContainer">
          <DropDown
            name="Plants"
            selectionItemDatas={this.state.plantsTabOptions}
          />
          <DropDown
            name="Attractions"
            selectionItemDatas={this.state.attractionsTabOptions}
          />

          <NavTab link="/contact" value="Contact" />
        </div>
      </div>
    );
  }
}

export default NavBar;
