/* eslint-disable import/no-anonymous-default-export */
const fs = require("fs");
const moment = require("moment");
const formidable = require("formidable-serverless");
const slugify = require("slugify");
const path = require("path");
export const config = {
  api: {
    bodyParse: false,
  },
};

export default async (req, res) => {
  const timeStamp = moment().format("DD-MM-YYYY");
  fs.mkdir(
    `./public/users/${timeStamp}`,
    { recursive: true },
    function (error) {
      return console.log("error :", error);
    }
  );
  const data = await new Promise((resolve, reject) => {
    const form = formidable({
      multiple: true,
      uploadDir: `./public/users/${timeStamp}`,
    });

    //   keep extensions
    form.keepExtensions = true;
    form.keepFileName = true;

    form.on("fileBegin", function (name, file) {
      file.path - path.join(`public/users/${timeStamp}`, slugify(file.name));
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      console.log("hello");
      resolve(files);
    });
  });

  res.json(data);
};
