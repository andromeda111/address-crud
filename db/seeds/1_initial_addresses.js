
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses')
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          id: 1,
          line_1: '1address line 1',
          line_2: '1address line 2',
          city: '1city line',
          zip: '1zip line'
        },
        {
          id: 2,
          line_1: '2address line 1',
          line_2: '',
          city: '2city line',
          zip: 'newnew'
        },
        {
          id: 3,
          line_1: '3address line 1',
          line_2: '3address line 2',
          city: '3city line',
          zip: 'new'
        }
      ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('addresses_id_seq', (SELECT MAX(id) FROM addresses))"
    )
  })
}
