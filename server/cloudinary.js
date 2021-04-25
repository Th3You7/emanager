const { uploader, config } = require("cloudinary").v2;

const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  next();
};

exports.cloudinaryConfig = cloudinaryConfig;
exports.uploader = uploader;
