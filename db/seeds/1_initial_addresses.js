
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses')
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          id: 1,
          line_1: '1 line 1',
          line_2: '1 line 2',
          city: '1city line',
          zip: '1zip line'
        },
        {
          id: 2,
          line_1: '2 line 1',
          line_2: '',
          city: '2city',
          zip: '2zip'
        },
        {
          id: 3,
          line_1: '3 line 1',
          line_2: '3 line 2',
          city: '3city',
          zip: '3zip'
        }
      ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('addresses_id_seq', (SELECT MAX(id) FROM addresses))"
    )
  })
}
