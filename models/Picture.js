const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, require: true },
  image: { type: Buffer, require: true },
  contentType: { type: String, require: true },
});

module.exports = mongoose.model("Picture", PictureSchema);
