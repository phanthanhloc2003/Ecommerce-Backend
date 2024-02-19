const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/image");
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, `${Date.now()}-image${fileExtension}`);
  },
});

const uploads = multer({ storage });

module.exports = { uploads };
