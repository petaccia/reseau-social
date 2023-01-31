// Importation de models
const User = require("../models/UserManager");


//Importation de bcrypt pour hash password
const bcrypt = require("bcrypt")

// signUp pour enregistrer le nouvel utilisateur dans la base de donnée
// salt = 10 combien de fois sera éxécuté l'algorithme de hash
exports.signUp = async (req, res) => {
  try {
      const hash = await bcrypt.hash(req.body.password,10) 
      const user = new User ({
        email : req.body.email,
        password : hash
      });
    //hash du pasword avec bcrypt
  
      // ce qui va être enregistré dans mongoDB
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
        }catch (error) {
        res.status(500).json({message: error.message});
        
    }
  }
  




