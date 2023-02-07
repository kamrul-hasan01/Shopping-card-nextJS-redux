import { toast } from "react-toastify";

const notify = (type, message, options = {}) => {
  try {
    if (!type || !message) {
      return console.log("Error For Notify:-----------Invalid Input");
    }

    let optionsObject = {
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      ...options,
    };

    switch (type) {
      case "success":
        toast.success(message, optionsObject);
        break;
      case "info":
        toast.info(message, optionsObject);
        break;
      case "warning":
        toast.warning(message, optionsObject);
        break;
      case "error":
        toast.error(message, optionsObject);
        break;

      default:
        toast(message, optionsObject);
        break;
    }
  } catch (error) {
    console.log("Error For Notify:-----------", error);
  }
};
export default notify;
