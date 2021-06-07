import React, { Component } from "react";
import "../css/plant.css";
import "../css/imageDisplayer.css";
import rose from "../images/a.jpeg";
import { Link } from "react-router-dom";
import PlantData from "../dto/plantData";

class Plant extends Component {
  state = {
    plantData: new PlantData()
  };

  // onClickHandler = () => {
  //   this.props.history.push("/plantDetail/{this.state.plantData.id}");
  // };

  constructor(props) {
    super(props);

    this.state.plantData = this.props.plantData;
  }

  componentWillReceiveProps(props) {
    this.setState({ plantData: props.plantData });
  }

  render() {
    return (
      <Link className="plant" to={`/plantDetail/0`}>
        <img src={this.state.plantData.profileImgUrl} alt="" />
        {/* <img src={rose} alt="" /> */}
      </Link>
    );
  }
}

export default Plant;
