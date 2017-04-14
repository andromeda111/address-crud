
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts')
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          id: 1,
          first_name: '1first',
          last_name: '1last',
          phone_number: '1phone',
          email_address: '1email',
          image_url: '1img',
          addresses_id: 1
        },
        {
          id: 2,
          first_name: '2first',
          last_name: '2last',
          phone_number: '2phone',
          email_address: '2email',
          image_url: '2img',
          addresses_id: 2
        },
        {
          id: 3,
          first_name: '3first',
          last_name: '3last',
          phone_number: '3phone',
          email_address: '3email',
          image_url: '3img',
          addresses_id: 1
        },
        {
          id: 4,
          first_name: '4first',
          last_name: '4last',
          phone_number: '4phone',
          email_address: '4email',
          image_url: '4img',
          addresses_id: 2
        }
      ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('contacts_id_seq', (SELECT MAX(id) FROM contacts))"
    )
  }).catch(error => {
    console.log(error);
  })
}
