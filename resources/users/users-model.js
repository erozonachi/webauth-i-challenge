const db = require('../../data/dbConfig');

module.exports = {
  create: function(user) {
    return db('users')
      .insert(user)
      .then(([ id ]) => this.readById(id));
  }
};
