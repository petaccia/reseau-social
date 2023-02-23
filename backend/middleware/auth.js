//Importation 
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// exportation de la fonction du middleware
module.exports = (req,res, next) => {
  
  try{
    // console.log(req.headers.authorization);
    // Récupérer le token dans le header autorisation : bearer token
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    
    // Décoder le token
    const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    // console.log(decodedToken);
    
    // console.log(req.body);
    
    // Récupérer l'userId qu'il y a dans le token dechiffré et le comparer avec l'user id en clair
    const userIdDecodedToken = decodedToken.userId;
    // console.log(userIdDecodedToken);
    // console.log(req.body.userId);

    // console.log("------------original-------");
    // console.log(req.originalUrl);
    userIdParamsUrl = req.originalUrl.split("=")[1];
    // console.log(userIdParamsUrl);
    //Comparaison de l'userId qu'il y a en claier dans le req avec userId qu'il y a dans le token
    if (req._body === true) {
      // contrôle quand ça pâsse par body raw
      if (req.body.userId === userIdDecodedToken){
          next()
          } else{
            throw "erreur identification userId"
          }
          // contrôle quand ça pâsse par form-data (MULTER IMAGE) params url 
        }else if(userIdParamsUrl === userIdDecodedToken) {
          next()
        }else{
          throw "erreur identification url params form-data"
        }
    // Les erreurs sont récupérés ici
  } catch (error){
    res.status(401).json({message : "echec de l'Authentification", error: error });
  }
};
