import React from 'react';
import Form from './form';
import AttractionData from '../dto/attractionData';
import AttractionsModel from '../models/attractionsModel';
import Joi from 'joi-browser';
import '../css/form.css';
import '../css/createNew.css';

class CreateNewAttraction extends Form {
  state = {
    data: new AttractionData(-1, '', '', '', '', []),
    errors: {}
  };

  constructor() {
    super();
    this.attractionsModel = new AttractionsModel();
  }

  schema = {
    name: Joi.string()
      .required()
      .label('Attraction Name'),
    address: Joi.string()
      .required()
      .label('Address'),
    description: Joi.string()
      .required()
      .label('Description')
  };

  async doSubmit() {
    let promise = Promise.resolve(
      await this.attractionsModel.createAttraction(this.state.data)
    );
    promise.then(value => {
      console.log(value);
    });
  }

  render() {
    return (
      <div className="createNew">
        <h1 className="header">CreateNewAttraction</h1>
        <form onSubmit={this.submitHandler}>
          {this.renderInput('name', 'Name')}
          {this.renderInput('address', 'Address')}
          {this.renderInput('description', 'Description')}

          {/* <div className="form-group">
            <label htmlFor="">Pictures</label>
            <input type="text" className="form-control" />
          </div> */}
          <div className="submitButton">
            {this.renderButton('Create Attraction')}
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNewAttraction;
