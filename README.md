# reseau-social

## Creer un dossier backend.

## initiliser le dossier avec git: tapez npm init -y dans la console.

## Installer les fichiers et les dossiers en backend.
(fichiers: .env, .env.sample, .gitignore, app.js, index.js)
(dossiers: controllers, database, middleware, models, routes)

Créer un dossier docs et images en dehors du dossier backend

## Installer le package nodemon en tapant npm install --save-dev nodemon pour mettre en dev dependencies.
## Installer le package express en tapant npm install express.
## Installer le package dotenv en tapant npm install --save-dev dotenv pour mettre en dev dependencies.
## Installer le package morgan en tapant npm install --save-dev morgan pour mettre en dev dependencies.
## Installer le package mongoose en tapant npm install mongoose.

Dans le fichier index.js importer: le fichier app.js et les variables d'environnement.
Dans le fichier app.js importer: express, morgan, le fichier data.js.

---------------- Création de la base de données---------------
Créer un fichier data.js dans le dossier database.

dans le fichier data, importer mongoose, dotenv et faire la connection à mongoDB.


exemple :

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connexion réussi à MongoDB")) 
.catch(() => console.log("connexion à MongoDB échoué"));

## Installer le package body-parser.
dans le fichier app importer body-parser 
