// importation express
const express = require("express");

//Importation du controllers
const userControllers = require("../controllers/userControllers");

//La fonction router
const router = express.Router();


//Les routes
router.post("/createUser", userControllers.createUser);



module.exports = router;


