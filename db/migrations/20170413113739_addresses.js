exports.up = function(knex) {
    return knex.schema.createTable('addresses', table => {
      table.increments()
      table.string('line_1')
      table.string('line_2')
      table.string('city')
      table.string('zip')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses')
};
