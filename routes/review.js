
const express = require("express");
const { addUpdateReview, reviews } = require("../controller/review");

const reviewRoute = express();

reviewRoute.route("/addUpdate/review").post(addUpdateReview)
reviewRoute.route("/reviews").get(reviews);

module.exports = reviewRoute;