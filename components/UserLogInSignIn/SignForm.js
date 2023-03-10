import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/userSlice";
import Loading from "../Common/Loading/Loading";
import { isValidImage, passwordMatch } from "../Hooks/formHelper";
import notify from "../Hooks/nofity";
import { URL } from "../Utils/BaseUrl";
const SignForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useRef();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e?.target?.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const [isValid, errorMessage] = isValidImage(image, 1.1);
    const [isPassValid, errorPassMessage] = passwordMatch(
      formData.password,
      formData.confirmPassword
    );

    if (!isValid) return notify("error", errorMessage);
    if (!isPassValid) return notify("error", errorPassMessage);
    form.current.reset();
    try {
      const imageForm = new FormData();
      imageForm.append("image", image);
      imageForm.append("key", "2c9d8a3e615b65e21bed015b6d901ef0");
      imageForm.append("album", "Shopping-card");

      const result = await axios("https://api.imgbb.com/1/upload", {
        method: "POST",
        data: imageForm,
      });

      if (result.data.success) {
        formData["imageURL"] = result.data.data.url;
        try {
          const fullPath = URL + "/user/signup/";
          const response = await axios.post(fullPath, formData);
          console.log("response :", response);
          setLoading(false);
          if (response.data.status === "success") {
            dispatch(setToken(response.data.token));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            notify("success", response.data.message);
          }
        } catch (error) {
          console.log("error :", error);
          setLoading(false);
          notify("error", "check information correctly");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log("error :", error);
      notify("error", error.message);
    }
  };
  return (
    <div className="min-w-full md:min-w-[585px] h-full ">
      <div className="p-10  shadow-lg rounded-lg bg-[#E2E8F0] border-0">
        <p className="text-sm font-bold text-[#64748b] text-center py-3 border-b border-[#00000021] mb-3">
          Sign up
        </p>

        <form
          ref={form}
          className="flex flex-col "
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            htmlFor="fullName"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Name
          </label>
          <input
            type="text"
            id="fullName"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="fullName"
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
          />

          <label
            htmlFor="contactNumber"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="contactNumber"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="contactNumber"
            placeholder="Phone"
            onChange={(e) => handleInputChange(e)}
          />
          <label
            htmlFor="image"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Image
          </label>
          <input
            required
            type="file"
            id="phone"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="image"
            placeholder="Image"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
          />
          <label
            htmlFor="email"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="email"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
          <label
            htmlFor="password"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />
          <label
            htmlFor="confirmPassword"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Confirm PASSWORD
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="confirmPassword"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />
          {loading ? (
            <Loading customStyle="w-10 h-10 border-[#0F172A]" />
          ) : (
            <button
              type="submit"
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 bg-[#0F172A] mt-3"
            >
              CREATE ACCOUNT
            </button>
          )}
        </form>
      </div>

      <div className="flex justify-end mt-[30px]">
        <Link
          href="/user/log-in"
          className="text-[#e2e8f0] text-[13px]  hover:underline"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default SignForm;
