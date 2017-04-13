
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del().then(()=> {
    return knex('addresses').del()
  })

}
