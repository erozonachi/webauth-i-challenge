const usersModel = require('./users-model');
const bcrypt = require('bcryptjs');

module.exports = {
  create: async function(req, res) {
    try {
      const user = await usersModel.create({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 12)
      });

      res.status(201)
        .json(user);
    } catch(error) {
      res.status(500)
        .json({
          error: 'server error'
        });
    }
  },

  read: async function(req, res) {
    try {
      const users = await usersModel.read();

      res.status(200)
        .json(users);
    } catch(error) {
      res.status(500)
        .json({
          error: 'server error'
        });
    }
  }
};
