import React, { Component } from "react";
import { Link } from "react-router-dom";
import Topic from "./topic.jsx";
import ImageDisplayer from "./imageDisplayer.jsx";
import PlantData from "../dto/plantData";

import PlantsModel from "../models/plantsModel";

class PlantDetail extends Component {
  state = {
    plantData: new PlantData()
  };

  constructor(props) {
    super(props);
    this.state.plantData = props.plantData;
    this.plantsModel = new PlantsModel();
  }

  componentDidMount() {
    this.plantsModel.getPlantDataById(
      this.props.match.params.plantId,
      plantData => {
        //console.log(plantData);
      }
    );
  }

  componentWillReceiveProps(props) {
    this.setState({ plantData: props.plantData });
  }

  render() {
    return (
      <div className="plantDetailContainer">
        {/* <ImageDisplayer images={this.state.plantData.imgUrls} /> */}
        <div className="plantDescription">
          {/* <div className="name">{this.state.plantData.name}</div>
          <div className="name">{this.state.plantData.description}</div> */}
        </div>
        {/* <div>
          <Topic />
          <Topic />
        </div> */}
      </div>
    );
  }
}

export default PlantDetail;
