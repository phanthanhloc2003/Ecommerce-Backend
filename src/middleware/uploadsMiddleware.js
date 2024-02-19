const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/avatar");
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, `${Date.now()}-avatar${fileExtension}`);
  },
});

const upload = multer({ storage });

module.exports = { upload };
