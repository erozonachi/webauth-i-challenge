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
  },

  authenticate: async function(req, res) {
    try {
      const { username, password } = req.body;
      const user = await usersModel.readByUsername(username);
      if(user && bcrypt.compareSync(password, user.password)) {
        req.session(user);
        return res.status(200)
          .json({
            message: `Welcome ${user.first_name}, ${user.last_name}`
          });
      }
      
      res.status(400)
        .json({
          message: 'invalid credentials'
        });
    } catch(error) {
      res.status(500)
        .json({
          error: 'server error'
        });
    }
  }
};
