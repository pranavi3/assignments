const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/secrets');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token){
        res.status(403).json({
            msg: 'Not authenticated'
        });
    }
    const jwtToken = token.split(' ')[1]; //after bearer
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username){
        req.username = decodedValue.username;
        next();
    }
    else{
        res.status(403).json({
            msg: 'Not authenticated'
        });
    }
}

module.exports = userMiddleware;