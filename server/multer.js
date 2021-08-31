const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");
const dUri = new DatauriParser();

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");
const coverUpload = multer({ storage }).single("loanCover");
const profileUpload = multer({ storage }).single("loanProfile");
const adminProfileUpload = multer({ storage }).single("adminProfile");
const adminCoverUpload = multer({ storage }).single("adminCover");

const bufferToUri = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

exports.upload = upload;
exports.coverUpload = coverUpload;
exports.profileUpload = profileUpload;
exports.adminCoverUpload = adminCoverUpload;
exports.adminProfileUpload = adminProfileUpload;
exports.bufferToUri = bufferToUri;
