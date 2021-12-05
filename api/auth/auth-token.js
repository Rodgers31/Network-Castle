const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/secreatmaker');

function buildToken(user) {
  const payload = {
    subject: user.id,
    username: user.user_name,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = {
  buildToken,
};
