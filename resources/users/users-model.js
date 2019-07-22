const db = require('../../data/dbConfig');

module.exports = {
  create: function(user) {
    return db('users')
      .insert(user)
      .then(([ id ]) => this.readById(id));
  },

  read: function() {
    return db('users');
  },

  readById: function(id) {
    return db('users')
      .where({ id })
      .first();
  },

  readByUsername: function(username) {
    return db('users')
      .where({ username })
      .first();
  }

};
