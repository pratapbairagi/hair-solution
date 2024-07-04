const express = require("express");
const { galleryCreate, galleriesDetails, galleryDetails, galleryDelete, galleryUpdate } = require("../controller/gallery");

const galleryRoute = express();

galleryRoute.route("/galleryCreate").post(galleryCreate);
galleryRoute.route("/galleryDetails/:id").get(galleryDetails);
galleryRoute.route("/galleriesDetails").get(galleriesDetails);
galleryRoute.route("/galleryUpdate/:id").put(galleryUpdate);
galleryRoute.route("/galleryDelete/:id").delete(galleryDelete);

module.exports = galleryRoute