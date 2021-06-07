import http from './httpService';

class UploaderService {
  static upload(formData) {
    for (let key of formData.entries()) {
      console.log(key);
    }

    let res = http.post(`http://localhost:3200/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Front1');
    console.log(res);
    return res;
  }
}

export default UploaderService;
