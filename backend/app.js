//Importation de express
const express = require("express");

// Importer Cors
const cors = require("cors");

// Importation de morgan(logger http)
const morgan = require("morgan");

// Importation du fichier data.js pour connexion à la base de donnée
const mongoose = require("./database/data");

//Importer body-parser
const bodyParser = require("body-parser");

//Importation des routes
const connexionRoutes = require("./routes/Connexion");
const userRoutes = require("./routes/User");

//Importation du path nodejs utilitaires pour travailler avec les chemins des répertoires
const path = require("path");

const app = express();

//logger les requêtes et les reponses 
app.use(morgan("dev"));

// gérer les problèmes de CORS (Cross-Origin Request Sharing)
app.use((req,res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-with, Content, Accept, ContentType, Autorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//transformer le corops (le body) en json objet javascript utilisable
app.use(bodyParser.json());

//debug mongoose
mongoose.set('debug', true);

// route D'authentification (auth)
app.use("/auth", connexionRoutes);

//route pour utilisateur
app.use("/user", userRoutes);

//routes pour accéder aux images du dossier images
app.use("/images", express.static(path.join(__dirname, "images")));

//exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;