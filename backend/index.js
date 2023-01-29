const mongoose = require("mongoose");

// importer fichier app 
const app = require("./app.js")

// importer les variable d'environnements
require("dotenv").config()

mongoose.connect('mongodb://127.0.0.1:27017/reseauSocial')
.then(() => console.log('Connected!'));

app.listen(process.env.PORT, ()=> console.log('Server up and running...'));

