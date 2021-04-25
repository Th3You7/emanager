const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");
const dUri = new DatauriParser();

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");

const bufferToUri = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

exports.upload = upload;
exports.bufferToUri = bufferToUri;
