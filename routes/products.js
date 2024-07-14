const express = require("express");
const { productsDetails, productDetails, productDelete, productUpdate, productCreate, order, orderCancel } = require("../controller/product.js");
const userAuth = require("../middleware/userAuth.js");
const userRole = require("../utils/userRole.js");

const productsRoute = express()

productsRoute.route("/productsDetails").get(productsDetails);
productsRoute.route("/productDetails").get(productDetails);
productsRoute.route("/productDelete/:id").delete(userAuth, userRole(["admin", "owner"]), productDelete);
productsRoute.route("/productUpdate/:id").put(userAuth, userRole(["admin", "owner"]), productUpdate);
productsRoute.route("/productCreate").post(userAuth, userRole(["admin", "owner"]), productCreate);


productsRoute.route("/order").post(order);
productsRoute.route("/order/cancel/:id").delete(orderCancel)

module.exports = productsRoute