const express = require("express");
const { galleryCreate, galleriesDetails, galleryDetails, galleryDelete, galleryUpdate } = require("../controller/gallery");
const userRole = require("../utils/userRole");
const userAuth = require("../middleware/userAuth")

const galleryRoute = express();

galleryRoute.route("/galleryCreate").post(userAuth, userRole(["admin", "owner"]), galleryCreate);
galleryRoute.route("/galleryDetails/:id").get(galleryDetails);
galleryRoute.route("/galleriesDetails").get(galleriesDetails);
galleryRoute.route("/galleryUpdate/:id").put(userAuth, userRole(["admin", "owner"]), galleryUpdate);
galleryRoute.route("/galleryDelete/:id").delete(userAuth, userRole(["admin", "owner"]), galleryDelete);

module.exports = galleryRoute