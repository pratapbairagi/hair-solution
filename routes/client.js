const express = require("express");
const { addPurchase, clientCreate, addService, clientUpdate } = require("../controller/client");
const userAuth = require("../middleware/userAuth");

const clientRoute = express();

clientRoute.route("/add/client").post(userAuth, clientCreate)
clientRoute.route("/update/client/:id").put(userAuth, clientUpdate)
clientRoute.route("/add/purchaseProduct/:id").put(userAuth, addPurchase)
clientRoute.route("/add/takenService/:id").put(userAuth, addService)


module.exports = clientRoute;