//Importation 
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// exportation de la fonction du middleware
module.exports = (req,res, next) => {
  // console.log(req.headers.authorization);
  try{
    // Récupérer le token dans le header autorisation : bearer token
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    
    // Décoder le token
    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    // console.log(decodedToken);
    
    
    // Récupérer l'userId qu'il y a dans le token dechiffré et le comparer avec l'user id en clair
    const userIdDecodedToken = decodedToken.userId;
    // console.log(userIdDecodedToken);
    
    // console.log(req.body.userId);
    //Comparaison de l'userId qu'il y a en claier dans le req avec userId qu'il y a dans le token
    if (req.body.userId && (req.body.userId === userIdDecodedToken)) {
      next()
    }else{
      throw "User Id non valide"
    }
    //Les erreurs sont récupérés ici
  } catch (err){
    res.status(401).json({ err })
  }
}
