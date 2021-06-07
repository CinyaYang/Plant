import http from "./httpService";

const apiEndpoint = "http://localhost:3100/plant";

class PlantService {
  // getHttpPath(methodName) {
  //   return apiEndpoint + methodName;
  // }

  static getPlants() {
    return http.get(apiEndpoint + "/getAllPlants");
  }

  static createPlant(plantData) {
    let res = http.post(apiEndpoint + "/createPlant", plantData);
    console.log("Front1");
    console.log(res);
    return res;
  }
}

export default PlantService;
