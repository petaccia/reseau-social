// importation de mongoose 
const mongoose = require("mongoose");


//modèle donnée utilisateur pour le frontend
const Schema = mongoose.Schema({
 userId : { type: String, required: true},
 name : { type: String, required: true },
 username : { type: String, required: true },
 age : { type: Number, required: true },
});

//exportation du module
module.exports = mongoose.model("user", Schema);