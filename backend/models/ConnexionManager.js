// importation de mongoose 
const mongoose = require("mongoose");

// importation mongoose-unique-validator
const uniqueValidator = require("mongoose-unique-validator"); 

//modèle de base de donnée pour le signup( pour enregistrer un nouvel utlisateur )
const Schema = mongoose.Schema({
  email : { type: String, required: true, unique: true },
  password : { type: String, required: true }
});

// sécurité conseillé pour ne pas enregistrer 2 fois la même adresse email dans la base de donnée
Schema.plugin(uniqueValidator);
//exportation du module
module.exports = mongoose.model("connexion", Schema);