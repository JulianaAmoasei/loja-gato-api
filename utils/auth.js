const jwt = require('jsonwebtoken');
const User = require('../models/User')

function getToken(user){
  let token = jwt.sign({user}, process.env.JWT_SECRET)
  return {token}
}

async function verifyToken(req, res, next){
  const { authorization } = req.headers;
  if (authorization){
    const token = authorization.split(" ")[1]
    try {
      protoUser = jwt.verify(token, process.env.JWT_SECRET)
    } catch(err) {
      return res.send("TOKEN NOT VALID")
    }

    let usr = await User.findOne({where : {email : protoUser.user.email}})
    if (usr) {
      return next();
    }
  }
  return res.send("TOKEN NOT VALID")
}

module.exports = {
  getToken,
  verifyToken
}