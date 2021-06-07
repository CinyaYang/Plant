import PlantData from '../dto/plantData';
import PlantService from '../services/plantService';
import UploadService from '../services/uploadService';

class PlantsModel {
  constructor() {
    this.plantDatas = new Map();
    this.popularDatas = [];
    this.currentDatas = [];
  }

  static getAllPlantDatas() {
    return this.currentDatas;
  }

  getPopularPlantDatas() {
    return this.popularDatas;
  }

  getPlantDataById(id, callback) {
    callback(this.plantDatas.get(id));
  }

  async loadPlantDatas() {
    let { data } = await PlantService.getPlants();

    for (let i = 0; i < data.length; i++) {
      let plant = data[i];
      let plantData = new PlantData(
        plant.id,
        plant.name,
        plant.description,
        plant.profileImgUrl,
        plant.imgUrls,
        plant.isPopular
      );
      this.plantDatas = this.plantDatas.set(plantData.id, plantData);

      if (plantData.isPopular) {
        this.popularDatas = this.popularDatas.concat(plantData);
      }
    }

    return Array.from(this.plantDatas.values());
  }

  async uploadImages(formData) {
    console.log('model');
    console.log(formData);
    return await UploadService.upload(formData);
  }

  async createPlant(plantData) {
    console.log('model');
    console.log(plantData);
    return await PlantService.createPlant(plantData);
  }
}

export default PlantsModel;
