import React, { Component } from 'react';
import ImageDisplayer from './imageDisplayer.jsx';
import Search from './search.jsx';
import Plants from './plants.jsx';
import PlantsModel from '../models/plantsModel';

class Home extends Component {
  state = {
    popularPlantDatas: [],
    profileImages: []
  };

  componentDidMount() {
    let promise = Promise.resolve(this.plantsModel.loadPlantDatas());
    promise.then(value => {
      this.setState({ popularPlantDatas: value });
      console.log(value);
    });
  }

  constructor() {
    super();
    this.plantsModel = new PlantsModel();
  }

  render() {
    return (
      <div>
        <ImageDisplayer images={this.state.profileImages} />
        <Search />
        <Plants plantDatas={this.state.popularPlantDatas} />
      </div>
    );
  }
}

export default Home;
