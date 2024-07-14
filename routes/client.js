const express = require("express");
const { addPurchase, clientCreate, addService, clientUpdate, singleClient, allClients, clientDelete, updatePurchase, products, updateTakenService, deleteTakenService, deletePurchase, reviewMail } = require("../controller/client");
const userAuth = require("../middleware/userAuth");
const userRole = require("../utils/userRole");

const clientRoute = express();

clientRoute.route("/add/client").post(userAuth, userRole(["admin", "owner"]), clientCreate)
clientRoute.route("/client/:id").get(userAuth, userRole(["admin", "owner"]),  singleClient)
clientRoute.route("/clients").get(userAuth, userRole(["admin", "owner"]),  allClients)
clientRoute.route("/update/client/:id").put(userAuth, userRole(["admin", "owner"]),  clientUpdate)
clientRoute.route("/delete/client/:id").delete(userAuth, userRole(["admin", "owner"]),  clientDelete)
// clientRoute.route("/add/purchaseProduct/:id").put( addPurchase)
clientRoute.route("/update/purchase/:id").put(userAuth, userRole(["admin", "owner"]), updatePurchase)
clientRoute.route("/add/purchase/:id").put(userAuth, userRole(["admin", "owner"]),  addPurchase) 
clientRoute.route("/delete/purchase/:id").put(userAuth, userRole(["admin", "owner"]), deletePurchase) 

clientRoute.route("/products").get(   products)
clientRoute.route("/client/review/mail/:clientId").post(reviewMail)

clientRoute.route("/add/takenService/:id").put(userAuth, userRole(["admin", "owner"]),  addService)
clientRoute.route("/update/takenService/:id").put(userAuth, userRole(["admin", "owner"]),  updateTakenService)
clientRoute.route("/delete/takenService/:id").put(userAuth, userRole(["admin", "owner"]), deleteTakenService)

// clientRoute.route("/add/takenService/:id").put( addService)


module.exports = clientRoute;