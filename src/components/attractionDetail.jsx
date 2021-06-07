import React, { Component } from "react";
import { Link } from "react-router-dom";
import Topic from "./topic.jsx";
import ImageDisplayer from "./imageDisplayer.jsx";
import AttractionData from "../dto/attractionData";
class AttractionDetail extends Component {
  state = {
    atractionData: new AttractionData()
  };

  constructor(props) {
    super(props);
    this.state.plantData = props.plantData;
  }

  render() {
    return (
      <div className="attractionDetailContainer">
        {/* <ImageDisplayer images={this.state.atractionData.imgUrls} /> */}
        <div className="attactionDescription">
          <div className="name">{this.state.atractionData.name}</div>
          <div className="name">{this.state.atractionData.description}</div>
        </div>
        {/* <div>
          <Topic />
          <Topic />
        </div> */}
      </div>
    );
  }
}

export default AttractionDetail;
