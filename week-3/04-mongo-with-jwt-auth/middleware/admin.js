const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/secrets');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({
            msg: 'Not authenticated'
        });
    }
    const jwtToken = token.split(' ')[1]; //after bearer
    try{
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg: 'Not authenticated'
        });
    }
}catch(err){
    return res.json({
        msg: 'Invalid'
    })
}
}

module.exports = adminMiddleware;