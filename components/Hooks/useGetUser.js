import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserInfo } from "../../redux/slices/userSlice";
import { URL } from "../Utils/BaseUrl";

const useGetUser = async () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleToken = () => {
    console.log("handle token func");
    if (!token) {
      const localStorageToken = localStorage.getItem("token");
      if (localStorageToken) {
        dispatch(setToken(JSON.parse(localStorageToken)));
      }
    }
  };
  useEffect(() => {
    handleToken();
  }, []);

  const getUserData = async () => {
    try {
      const result = await axios(URL + "/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result?.data?.status === "success") {
        dispatch(setUserInfo(result?.data?.data));
      }
    } catch (error) {
      console.log("error :", error);
    }
  };
  useEffect(() => {
    if (token) getUserData();
  }, [token]);

  return null;
};

export default useGetUser;
