import React, { Component } from "react";
import "../css/plant.css";
import "../css/imageDisplayer.css";
import rose from "../images/a.jpeg";
import { Link } from "react-router-dom";

class Attraction extends Component {
  state = {
    attractionData: null,
    attraction: { id: 0 }
  };

  // onClickHandler = () => {
  //   this.props.history.push("/plantDetail/{this.state.plantData.id}");
  // };

  constructor(props) {
    super(props);

    this.state.attractionData = this.props.attractionData;
  }

  render() {
    return (
      <div className="plant">
        <Link to={`/attractionDetail/${this.state.attraction.id}`}>
          <img src={this.state.attraction.profileImgUrl} alt="" />
          {/* <img src={rose} alt="" /> */}
        </Link>
      </div>
    );
  }
}

export default Attraction;
