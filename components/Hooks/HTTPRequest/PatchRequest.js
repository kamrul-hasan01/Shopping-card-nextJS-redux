import axios from "axios";
import { URL } from "../../Utils/BaseUrl";

export const PatchRequest = async (path, data) => {
  try {
    const fullPath = URL + path;
    const result = await axios.patch(fullPath, data);
    return result.data.status === "success" ? true : false;
  } catch (error) {
    console.log("error :", error);
  }
};
