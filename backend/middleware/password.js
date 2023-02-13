const passwordvalidator = require("password-validator");

const passwordSchema = new passwordvalidator();

passwordSchema
.is().min(5)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits(2)
.has().not().spaces()
.is().not().oneOf(['Passw0rd', 'Password123']);

//Verification de la qualité du password par rapport au schema
module.exports = (req,res, next) => {
if (passwordSchema.validate(req.body.password)) {
next();
}else{
  return res.status(400).json({ error: `le mot de passe est trop faible ${passwordSchema.validate('req.body.password', {list: true})}`})
}
} 

