// Importation de models
const User = require("../models/UserManager");

//importation de crypto.js pour hacher l'email
const cryptoJs = require("crypto-js");

//Importation de bcrypt pour hash password
const bcrypt = require("bcrypt");

// Importation de Jsonwebtoken
const jwt = require("jsonwebtoken");


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
    try{
      // chiffrer l'email de la requête
      const emailCryptoJs = cryptoJs
      .HmacSHA256(req.body.email,`${process.env.DB_KEY_SECRET}`).toString();
       
      // chercher dans la base de données si l'utilisateur est bien présent
        const user= await User.findOne({email : emailCryptoJs })
        if (!user) {
          return res.status(400).json({ error : "utilisateur non reconnu"})
        }
        // contrôler la validité du password envoyé par le front
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordValid) {
          // si le mot de passe n'est pas bon
          return res.status(401).json({ error: "mot de passe incorrect"})
        }
        // si le mot de passe correct
        // envoie dans la réponse du serveur du userId et du token d'auth
        // encodage du userId pour la création de nouveau objet
        res.status(200).json({
          //3 arguments
          userId: user._id,
          token: jwt.sign({userId: user._id}, `${process.env.JWT_KEY_TOKEN}`, {expiresIn: "12h"}),
        });
      } catch (err) {
        res.status(500).json({ err });
  }                  
}
    
                
               
              
    
  
      
      
    
      



  




