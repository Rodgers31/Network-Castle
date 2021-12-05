const { secret } = require('../secrets/secreatmaker');
const jwt = require('jsonwebtoken');

const restristed = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'Token required' });
  }
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      next({ status: 401, message: 'Token invalid' });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

module.exports = {
  restristed,
};
