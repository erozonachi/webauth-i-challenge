
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'James', 
          last_name: 'Eneh',
          username: 'james',
          password: null
        },
      ]);
    });
};
