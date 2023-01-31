// importation de mongoose 
const mongoose = require("mongoose");

//modèle de base de donnée pour le signup( pour enregistrer un nouvel utlisateur )
const userSchema = mongoose.Schema({
  email : { type: string, required: true, unique: true },
  password : { type: string, required: true }
})
//exportation du module
module.exports = mongoose.model("user", userSchema);