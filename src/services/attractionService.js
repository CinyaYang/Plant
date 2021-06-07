import http from "./httpService";

const apiEndpoint = "http://localhost:3100/attraction";

class PlantService {
  // getHttpPath(methodName) {
  //   return apiEndpoint + methodName;
  // }

  static getPlants() {
    return http.get(apiEndpoint + "/getAllAttractions");
  }

  static createPlant(plantData) {
    return http.post(apiEndpoint + "/createAttraction", plantData);
  }
}

export default PlantService;
