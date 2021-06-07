class PlantData {
  constructor(
    id,
    plantName,
    botanicalName,
    oringinalCountry,
    description,
    profileImgUrl,
    imgUrls,
    isPopular
  ) {
    this.id = id;
    this.plantName = plantName;
    this.botanicalName = botanicalName;
    this.originalCountry = oringinalCountry;
    this.description = description;
    this.profileImgUrl = profileImgUrl;
    this.imgUrls = imgUrls;
    this.isPopular = isPopular; //undo: by click number renew everyday
  }
}

export default PlantData;
