import React, { Component } from "react";
import Attractions from "./attractions";
class AttractionsMenu extends Component {
  state = {
    attractionDatas: []
  };

  constructor(props) {
    super(props);

    this.state.attractionDatas = props.attractionDatas;
  }

  render() {
    return (
      <div>
        <Attractions attractionDatas={this.state.attractionDatas} />
      </div>
    );
  }
}

export default AttractionsMenu;
