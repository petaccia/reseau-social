// Importation du modelde la base de donnée
const Users = require("../models/UserManager");
const {browseUserQuery, readUserQuery, findByIdAndDeleteQuery} = require("../queries/UserQuery")



exports.createUser =  (req,res, next) => {
  
    const user = req.body

    console.log(user);
    // console.log("-----------req---------------")
    // console.log(req.protocol);
    // console.log(req.get("host"));
    // console.log(req.file.filename);
    const users = new Users({
     ...user,
      photoProfilUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
      
    });
    users.save()
    .then(() => {
      res.status(201).json({
        message : "objet enregistré dans la base de donnée", 
      contenu: req.body
    });

    })
        
      .catch ((error) => res.status(400).json({message: error.message}));
      };
     
  
  
 

exports.browseUser = async (req,res) => {
  try {
    const users = await browseUserQuery();
    res.status(200).json(users);
  }catch (error) {
    res.status(500).json({message: error.message});
  }
 } 

 exports.readUser = async (req,res) => {
  try {
    const id = req.params.id;
    const user = await readUserQuery(id);
    res.status(200).json(user);
  }catch (error) {
    res.status(404).json({message: error.message});
  }
 }

 exports.editUser = async (req, res) => {
  try{
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
  });
  console.log(updatedUser);
    res.status(200).json({message : "l'objet a été mis à jour", updatedUser});
  }catch (error) {
    res.status(400).json({message: error.message});
  }
 } 

 exports.destroyUser = async (req,res) => {
  try {
    const id = req.params.id;
    const objet = await readUserQuery(id);
    
    if(userIdParamsUrl === objet.userId){
      console.log(objet);
      const filename = objet.photoProfilUrl.split("/image")[1];
      fs.unlink(`images/${filename}`, (err) => {
        if (err) res.status(500).json({err});
        console.log(`${filename} le fichier a été supprimé`);
      });
      const user = await findByIdAndDeleteQuery(id);
      res.status(200).json({message : `id: ${req.params.id} document supprimé`});

    }else{
      res.status(403).json({ message: "Utilisateur pas autorisé à supprimer le document"})
    }
  }catch (error) {
    res.status(500).json({
      message: "image inexistante",
      error : error
    });
  }
 }
  
 