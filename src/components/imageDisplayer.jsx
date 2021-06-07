import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/imageDisplayer.css";
import rose from "../images/a.jpeg";

class ImageDisplayer extends Component {
  state = {
    images: [rose]
  };

  constructor(props) {
    super(props);
    //this.state.images = props.images;
  }

  render() {
    return (
      <Carousel>
        {this.state.images.map(image => (
          <div key={image}>
            <img src={rose} />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default ImageDisplayer;
