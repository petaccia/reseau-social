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

## Installer le package body-parser en tapant npm install body-parser.
dans le fichier app.js importer body-parser

--------------hachage du mot de passe--------------

## Installer le package bcrypt en tapant npm install bcrypt. 
dans le fichier UserControllers importer bcrypt.

-------------hachage de l'email--------------------
## Installer le package crypto-js en tapant npm install crypto-js. 
dans le fichier UserControllers importer crypto-js.

------------validation du password en fonction du nombres de caractères--------
## Installer le package password-validator en tapant npm install password-validator
Ensuite créer un middelware et le nommer password.js.
Importer password-validator et créer un schéma avec les conditions que vous souhaitez.

dans le fichier routes/User.js importer password-validator et l'intégrer au post sinUp.

-------------ne pas avoir un email en double dans la base de données-------
## Installer le package mongoose-unique-validator en tapant npm install mongoose-unique-validator
dans le fichier userManager importer mongoose-unique-validator.
En dessous de userSchema intégrer (userSchema.plugin(uniqueValidator);

-----------------création de la route Login---------------------------------
créer la route login dans route/User.js (router.post("/login", connexionController.login)
verification du mot de passe et de l'email avec bcrypt.
Dans le fichier connexionController.js créer :

- Créer fonction pour voir si l'utilisateur est présent dans la base de donnée.
- créer un fonction avec bcrypt (compare) pour contrôler la validité du password envoyé par le front.

Ensuite installer le package jsonwebtoken en tapant npm install jsonwebtoken.
Dans le fichier connexionController.js importer jsonwebtoken.
- Créer un token pour la sécurité du password.

---------------Création des routes pour l'utilisateur------------------------
Créer un fichier: (1) userControllers.js
                  (2) UserManager.js dans le dossier models
                  (3) User.js dans le dossier routes
                  
 créer un schema dans UserManager.js pour les utilisateurs
 créer des fonction pour réaliser un CRUD dans le fichier userControllers.js
 créer dans le dossier routes toutes les routes pour les utilisateurs.
