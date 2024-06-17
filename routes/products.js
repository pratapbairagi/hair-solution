const express = require("express");
const { productsDetails, productDetails, productDelete, productUpdate, productCreate, order, orderCancel } = require("../controller/product");

const productsRoute = express()

productsRoute.route("/productsDetails").get(productsDetails);
productsRoute.route("/productDetails").get(productDetails);
productsRoute.route("/productDelete").get(productDelete);
productsRoute.route("/productUpdate/:id").put(productUpdate);
productsRoute.route("/productCreate").post(productCreate);


productsRoute.route("/order").post(order);
productsRoute.route("/order/cancel/:id").delete(orderCancel)

module.exports = productsRoute