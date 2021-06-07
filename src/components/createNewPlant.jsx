import React from 'react';
import Joi from 'joi-browser';
import PlantData from '../dto/plantData';
import PlantsModel from '../models/plantsModel';
import Form from './form';
import { async } from '../services/httpService';
import '../css/form.css';
import '../css/createNew.css';
import Uploader from './uploader';

class CreateNewPlant extends Form {
  state = {
    data: {
      plantName: '',
      botanicalName: '',
      originalCountry: '',
      description: ''
    },
    files: [],
    errors: {}
  };

  constructor() {
    super();
    this.plantsModel = new PlantsModel();
    this.uploadImagesHandler = this.uploadImagesHandler.bind(this);
  }

  schema = {
    plantName: Joi.string()
      .required()
      .label('Plant Name'),
    botanicalName: Joi.string()
      .required()
      .label('Botanical Name'),
    originalCountry: Joi.string()
      .required()
      .label('Original Country'),
    description: Joi.string()
      .required()
      .label('Description')
  };

  async doSubmit() {
    console.log(this.state.files);

    let formData = new FormData();

    for (let i = 0; i < this.state.files.length; i++) {
      formData.append(this.state.files[i].name, this.state.files[i]);
    }

    if (this.state.files.length > 0) {
      let promise = Promise.resolve(
        await this.plantsModel.uploadImages(formData)
      );
      promise.then(value => {
        console.log(value);
        this.createPlant();
      });
    } else {
      this.createPlant();
    }

    this.createPlant();
    // ;
  }

  async createPlant() {
    let plantData = new PlantData(-1, '', '', '', '', '', [], false);

    let promise = Promise.resolve(
      await this.plantsModel.createPlant(plantData)
    );
    promise.then(value => {
      console.log(value);
    });
  }

  uploadImagesHandler(files) {
    if (files.length > 0) {
      let images = [];
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes('image')) {
          images.push(files[i]);
        }
      }

      this.setState({ files: [...this.state.files, ...images] });
    }
  }

  render() {
    const { data, errors } = this.state;

    return (
      <div className="createNew">
        <h1 className="header">CreateNewPlant</h1>
        <div>
          {this.renderInput('plantName', 'Plant Name')}
          {this.renderInput('botanicalName', 'Botanical Name')}
          {this.renderInput('originalCountry', 'Original Country')}
          {this.renderInput('description', 'Description')}
          <Uploader
            files={this.state.files}
            text="upload"
            uploadFileHandler={this.uploadImagesHandler}
          />

          {/* {this.renderUploader()} */}

          {/* <TextInput
            name="pictures"
            label="Pictures"
            value={data.imgUrls}
            error={errors.pictures}
            changeHandler={this.changeHandler}
          /> */}

          <div className="submitButton" onClick={this.submitHandler}>
            {this.renderButton('Create Plant')}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewPlant;
