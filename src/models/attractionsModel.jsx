import AttrationService from "../services/attractionService";
import AttractionData from "../dto/attractionData";

class AttractionsModel {
  constructor() {
    this.attractionDatas = [];
    //this.popularDatas = [];
    this.currentDatas = [];
  }

  getAllPlantDatas() {
    return this.attractionDatas;
  }

  //   getPopularPlantDatas(){
  //       return this.popularDatas;
  //   }

  async loadAttractionDatas() {
    let { data } = await AttrationService.getAttrations();

    // let worker = data.worker;
    // let AttractionData = new AttractionData(
    //   worker.id,
    //   worker.name,
    //   worker.companyName,
    //   worker.image,
    //   worker.email
    // );
    // return workerData;
  }

  createAttraction(attractionData) {}
}

export default AttractionsModel;
