const jwt = require('jsonwebtoken');
const User = require('../models/User')

function getToken(user){
  let token = jwt.sign({user}, process.env.JWT_SECRET)
  return {token}
}

async function verifyToken(header){
  const bearerHeader = header['authorization']
  if (typeof bearerHeader != "undefined"){
    const bearer = bearerHeader.split(" ")
    const bearerToken = bearer[1]
    try {
      protoUser = jwt.verify(bearerToken, process.env.JWT_SECRET)
    }
    catch(err){
      return false
    }

    let usr = await User.findOne({where : {email : protoUser.user.email}})
    if (usr) {
      return true
    }
  }
  return false
}

module.exports = {
    getToken: getToken,
    verifyToken: verifyToken
}