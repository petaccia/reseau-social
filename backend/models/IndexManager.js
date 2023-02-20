const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.connexion = require("./ConnexionManager");
db.role = require("./RoleManager");

db.Roles = ["user", "admin", "moderator"];

module.exports = db;
