const express = require('express');
const router = express.Router();
const Users = require('./users-model');
const {
  checkCredetials,
  checkUserNameExist,
  checkUserNameInDbExist,
} = require('./users-middleware');

router.get('/', (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Users.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  Users.update(id, changes)
    .then((change) => {
      if (change === 1) {
        Users.findById(id).then((user) => {
          res
            .status(200)
            .json({ message: `${user.user_name} has been updated`, user });
        });
      } else {
        next();
      }
    })
    .catch(next);
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Users.remove(id).then((user) => {
      res.status(202).json({
        message: `${user.user_name} has been successfully removed.`,
        user,
      });
    });
  } catch (error) {
    next();
  }
});

module.exports = router;
