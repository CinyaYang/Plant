import React, { Component } from "react";
import { Link } from "react-router-dom";
class Topic extends Component {
  state = {
    header: "",
    physicalPlaces: [],
    links: []
  };

  // constructor(props){
  //     super(props);
  //     this.state.header = props.header;
  //     this.state.physicalPlaces = props.physicalPlaces;
  //     this.state.links = props.links;
  // }

  render() {
    return (
      <div className="topicContainer">
        <div className="topicHeader">{this.state.header}</div>

        <div>
          {this.state.physicalPlaces.map(place => (
            <div className="point">place</div>
          ))}
        </div>

        <div>
          {this.state.links.map(link => (
            <div className="point">
              <Link to={link.url}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Topic;
