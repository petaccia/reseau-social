
// importer fichier app 
const app = require("./app.js")

// importer les variable d'environnements
require("dotenv").config()



app.listen(process.env.PORT, ()=> console.log('Server up and running...'));

