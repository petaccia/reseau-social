//Importation de express
const express = require("express");

// Importation de morgan(logger http)
const morgan = require("morgan");

// Importation du fichier data.js pour connexion à la base de donnée
const mongoose = require("./database/data");

const app = express();

//logger les requêtes et les reponses 
app.use(morgan("dev"));


//exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;