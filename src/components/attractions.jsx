import React, { Component } from "react";
import Attraction from "./attraction.jsx";
class Attractions extends Component {
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
        <div className="attractionsContainer">
          {this.state.attractionDatas.map(attractionData => (
            <Attraction attrationData={attractionData} />
          ))}
        </div>
      </div>
    );
  }
}

export default Attractions;
