// Importation de models
const User = require("../models/UserManager");

//importation de crypto.js pour hacher l'email
const cryptoJs = require("crypto-js");

//Importation de bcrypt pour hash password
const bcrypt = require("bcrypt");

//importation des variables d'environnement.
const dotenv = require("dotenv");
const result = dotenv.config();


//------------------------------SIGNUP----------------------------------------
// signUp pour enregistrer le nouvel utilisateur dans la base de donnée
// salt = 10 combien de fois sera éxécuté l'algorithme de hash
exports.signUp = async (req, res) => {
  
  //hacher l'email avant de l'envoyer dans la base de donnée
const emailCryptoJs = cryptoJs.HmacSHA256(req.body.email,`${process.env.DB_KEY_SECRET}`).toString();

  try {
      const hash = await bcrypt.hash(req.body.password,10) 
      const user = new User ({
        email : emailCryptoJs,
        password : hash
      });
    //hash du pasword avec bcrypt
  
      // ce qui va être enregistré dans mongoDB
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
        }catch (error) {
        res.status(500).json({message: error.message});
        
    }
  };

  // -----------------------LOGIN-----------------------

  //Login pour s'authentifier
  exports.login = async (req, res) => {

  };
  




