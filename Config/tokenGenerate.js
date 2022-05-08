require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

module.exports = function  generateToken(params = {}){
    return jsonwebtoken.sign(params,process.env.SECRET,{expiresIn:300 })
}

