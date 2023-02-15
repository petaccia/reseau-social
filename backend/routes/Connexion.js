// importation express
const express = require("express");

//Importation du middleware/password
const password = require("../middleware/password")

//Importation du controllers
const connexionController = require("../controllers/connexionControllers");

//La fonction router
const router = express.Router();

// La route login
router.post("/login", connexionController.login)

// la route (endpoint) signUp
router.post("/signUp", password, connexionController.signUp)



module.exports = router;