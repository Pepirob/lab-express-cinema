const mongoose = require("mongoose");

const movieScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const MovieModel = mongoose.model("Movie", movieScheme);

module.exports = MovieModel;
