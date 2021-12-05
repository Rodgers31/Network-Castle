const { getAllUsers } = require('./users-model');

const checkCredetials = (req, res, next) => {
  try {
    if (
      !req.body.user_name ||
      !req.body.name ||
      !req.body.email ||
      !req.body.password
    ) {
      next({ message: 'all fields are required' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkUserNameExist = async (req, res, next) => {
  try {
    const [user] = await getAllUsers({ user_name: req.body.user_name });
    if (user) {
      next({ message: 'username taken' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
const checkUserNameInDbExist = async (req, res, next) => {
  try {
    const [user] = await getAllUsers({ user_name: req.body.user_name });
    if (!user) {
      next({ meesage: 'invalid credentials' });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  checkCredetials,
  checkUserNameExist,
  checkUserNameInDbExist,
};
