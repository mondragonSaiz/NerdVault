const mongoose = require('mongoose');
const { Schema } = mongoose;

const figureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  releaseType: {
    type: String,
    required: true,
  },
  isEventExclsive: {
    type: Boolean,
    required: true,
  },
});

const Figure = mongoose.model('Figure', figureSchema);

module.exports = Figure;
