// importation express
const express = require("express");

//Importation du controllers
const userController = require("../controllers/UserControllers")

//La fonction router
const router = express.Router();



// la route (endpoint) signUp
router.post("/signUp", userController.signUp)
module.exports = router;