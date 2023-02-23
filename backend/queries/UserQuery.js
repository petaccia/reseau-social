const Users = require("../models/UserManager");

exports.browseUserQuery = () => {
  return Users.find({})
}




