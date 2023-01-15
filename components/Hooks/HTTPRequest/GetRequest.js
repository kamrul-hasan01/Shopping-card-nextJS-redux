import axios from "axios";
import { URL } from "../../Utils/BaseUrl";

export const GetRequest = async (path, cb) => {
  try {
    const fullPath = URL + path;
    const result = await axios.get(fullPath);
    if (cb) {
      cb(result.data.data);
    } else {
      return result.data.data;
    }
  } catch (error) {
    console.log("error :", error);
  }
};
