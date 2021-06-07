import React, { Component } from "react";
import Plants from "./plants.jsx";
import PlantsModel from "../models/plantsModel.jsx";
class PlantsMenu extends Component {
  state = {
    plantDatas: []
  };

  constructor(props) {
    super(props);
    this.state.plantDatas = props.plantDatas;
  }

  componentDidMount() {
    let plants = this.plantsModel.getAllPlantDatas();
    this.setState({ plantDatas: plants });
  }

  render() {
    return (
      <div>
        <Plants plantDatas={this.state.plantDatas} />
      </div>
    );
  }
}

export default PlantsMenu;
