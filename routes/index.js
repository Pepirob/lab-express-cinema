const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    const response = await MovieModel.find().select({ title: 1, image: 1 });
    console.log(response);
    res.render("movies/list.hbs", {
      movieArr: response,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:id", async (req, res, next) => {
    const { id } = req.params;
    // console.log(id);
  try {
    const response = await MovieModel.findById(id);
    console.log(response);
    res.render("movies/details.hbs", {
        movie: response
    })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
