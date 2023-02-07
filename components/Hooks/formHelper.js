export const isValidImage = (image, fileSize = 1.1) => {
  const imgType = ["image/png", "image/jpeg", "image/jpg"];
  let isValid = null;
  let warningMessage = null;
  if (image) {
    let { type, size } = image;
    var result = imgType.includes(type);
    if (!result) {
      isValid = false;
      warningMessage = "The format is not supported.";
    } else if (size / 1048576 > fileSize) {
      isValid = false;
      warningMessage = `Keep your file less than 1 MB`;
    } else {
      isValid = true;
      warningMessage = null;
    }
  } else {
    isValid = false;
    warningMessage = "Upload the proof of your payment";
  }
  return [isValid, warningMessage];
};
export const passwordMatch = (pass, conPass) => {
  let isValid = null;
  let warningMessage = null;
  if (pass !== conPass) {
    isValid = false;
    warningMessage = "password does not match";
  } else {
    isValid = true;
  }
  return [isValid, warningMessage];
};
