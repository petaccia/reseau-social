// importation express
const express = require("express");

//Importation du controllers
const userControllers = require("../controllers/userControllers");

//La fonction router
const router = express.Router();


//Les routes
router.get("/", userControllers.browseUser);
router.get("/:id", userControllers.readUser);
router.post("/", userControllers.createUser);
router.put("/:id", userControllers.editUser);
router.delete("/:id", userControllers.destroyUser)

module.exports = router;


