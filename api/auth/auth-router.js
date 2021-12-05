const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const { buildToken } = require('./auth-token');
const {
  checkCredetials,
  checkUserNameExist,
} = require('../users/users-middleware');

router.post(
  '/register',
  checkCredetials,
  checkUserNameExist,
  (req, res, next) => {
    const { user_name, name, email, password, admin } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    Users.insertUser({ user_name, name, email, password: hash, admin })
      .then((newUser) => {
        res
          .status(200)
          .json({ message: `${user_name} account has been created` });
      })
      .catch(next);
  }
);

router.post('/login', (req, res, next) => {
  let { user_name, password } = req.body;
  Users.findBy({ user_name })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = buildToken(user);
        res.status(200).json({
          id: user.id,
          message: `Welcome, ${user_name}`,
          token: token,
        });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});
module.exports = router;
