// multer : pour gérer les requêtes HTTP avec envoie de fichier

// Importation de multer
const multer = require("multer");
console.log(multer);

//le dictionnaire de MIME TYPES
const MIME_TYPE = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/png": "png",
  "image/svg+xml": "svg" 
}

//  La destination du fichier (repertoire) et générer un nom de fichier unique
const storage = multer.diskStorage({
// La destination de stockage du fichier
destination :  (req, file, cb) => {
  cb(null, "images");
  },
  filename: (req, file, cb) => {
    //supprimer les espaces dans le nom du fichier
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPE[ file.mimetype];

    cb(null, name + "_" + Date.now() + extension);
  }
})

// Expotation du middleware multer
module.exports = multer({storage}).single("image");
