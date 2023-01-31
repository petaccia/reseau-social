const mongoose = require("mongoose");

// Importer le package pour utiliser les variables d'environnement
const dotenv = require("dotenv");
const result = dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connexion réussi à MongoDB")) 
.catch(() => console.log("connexion à MongoDB échoué"));

module.exports = mongoose;