// importation express
const express = require("express");

//Importation du controllers
const userControllers = require("../controllers/userControllers");

//importation du middleware d'authentification
const auth = require("../middleware/auth")
//La fonction router
const router = express.Router();


//Les routes
router.get("/", auth, userControllers.browseUser);
router.get("/:id", auth, userControllers.readUser);
router.post("/", auth, userControllers.createUser);
router.put("/:id", auth, userControllers.editUser);
router.delete("/:id", auth,  userControllers.destroyUser)

module.exports = router;


