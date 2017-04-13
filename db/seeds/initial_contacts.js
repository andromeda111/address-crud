
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          id: 1,
          first_name: '1first',
          last_name: '1last',
          phone_number: '1phone',
          email_address: '1email',
          image_url: '1img'
        },
      ]);
    });
};
