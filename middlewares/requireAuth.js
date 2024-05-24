// middlewares/requireAuth.js
const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const User = mongoose.model('User');

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).send({ error: 'Authorization header is required' });
  }

  const token = authHeader.replace('Bearer ', '');
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.sub);
    
    if (!user) {
      return res.status(401).send({ error: 'User not found' });
    }
    
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = requireAuth;
