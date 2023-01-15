import axios from "axios";
import { URL } from "../../Utils/BaseUrl";

export const PostRequest = async (path, data) => {
  try {
    const fullPath = URL + path;
    const result = await axios.post(fullPath, data);
    return result.data.status === "success" ? true : false;
  } catch (error) {
    console.log("error :", error);
  }
};
