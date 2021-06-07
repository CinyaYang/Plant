import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

// export async function getPlants() {
//   const response = await axios.get(
//     `http://localhost:3000/api/getPlantById/rose`
//   );
//   console.log(response);
// }

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
