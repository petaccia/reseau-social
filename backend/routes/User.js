// importation express
const express = require("express");

//Importation du middleware/password
const password = require("../middleware/password")

//Importation du controllers
const userController = require("../controllers/UserControllers");

//La fonction router
const router = express.Router();

// La route login
router.post("/login", userController.login)

// la route (endpoint) signUp
router.post("/signUp", password, userController.signUp)
module.exports = router;