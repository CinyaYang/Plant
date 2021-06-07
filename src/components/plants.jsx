import React, { Component } from "react";
import "../css/plants.css";
import Plant from "./plant.jsx";

class Plants extends Component {
  state = {
    plantDatas: []
  };

  constructor(props) {
    super(props);
    this.state.plantDatas = props.plantDatas;
  }

  componentWillReceiveProps(props) {
    this.setState({ plantDatas: props.plantDatas });
  }

  render() {
    return (
      <div className="plantContainer">
        {/* {this.state.plantDatas.map(plantData => (
          <Plant key={plantData.id} plantData={plantData} />
        ))} */}
      </div>
    );
  }
}

export default Plants;
