// Importation du modelde la base de donnée
const User = require("../models/UserManager");

exports.createUser = async (req,res) => {
  console.log(req.body);
  console.log(req.body.user);
  const user = new User(req.body);
  try {
    const inserteduser = await user.save();
    res.status(201).json(inserteduser);
  }catch (error) {
    res.status(400).json({message: error.message});
  }
 }

