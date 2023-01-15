import axios from "axios";
import { URL } from "../../Utils/BaseUrl";

export const DeleteRequest = async (path) => {
  try {
    const fullPath = URL + path;
    const result = await axios.delete(fullPath);
    return result.data.status === "success" ? true : false;
  } catch (error) {
    console.log("error :", error);
  }
};
