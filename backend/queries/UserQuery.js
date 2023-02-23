const Users = require("../models/UserManager");

exports.browseUserQuery = () => {
  return Users.find({});
}

exports.readUserQuery = (id) => {
  return Users.findById({_id :id }).exec();
}

exports.Users.findByIdAndDeleteQuery = () =>  {
  return Users.findByIdAndDelete({id_: id }).exec();
}
