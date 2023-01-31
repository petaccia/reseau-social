// Importation de models
const User = require("../models/UserManager");

// signUp pour enregistrer le nouvel utilisateur dans la base de donnée

exports.signUp = async (req, res) => {
const user = new User ({
  email : req.body.email,
  password : req.body.password
});
try {
  const inserteduser = await user.save();
  res.status(201).json(inserteduser);
}catch (error) {
  res.status(500).json({message: error.message});
}
}


