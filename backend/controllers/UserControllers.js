// Importation du modelde la base de donnée
const Users = require("../models/UserManager");

exports.createUser = async (req,res) => {
  const users = new Users(req.body);
  try {
    const inserteduser = await users.save();
    res.status(201).json(inserteduser);
  }catch (error) {
    res.status(400).json({message: error.message});
  }
 }

exports.browseUser = async (req,res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  }catch (error) {
    res.status(500).json({message: error.message});
  }
 } 

 exports.readUser = async (req,res) => {
  try {
    const user = await Users.findById( req.params.id );
    res.status(200).json(user);
  }catch (error) {
    res.status(404).json({message: error.message});
  }
 }

 exports.editUser = async (req, res) => {
  try{
    const updateduser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
  });
    res.status(200).json(updateduser);
  }catch (error) {
    res.status(400).json({message: error.message});
  }
 } 

 exports.destroyUser = async (req,res) => {
  try {
    const deleteduser = await Users.findByIdAndDelete(req.params.id);
    
    res.status(204).json(deleteduser);
  }catch (error) {
    res.status(400).json({message: error.message});
  }
 }
  
 