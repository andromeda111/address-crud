exports.up = function(knex) {
    return knex.schema.createTable('contacts', table => {
      table.increments()
      table.string('first_name').notNullable().default('')
      table.string('last_name').notNullable().default('')
      table.string('phone_number').notNullable().default('')
      table.string('email_address').notNullable().default('')
      table.text('image_url').notNullable().default('')
      table.integer('addresses_id').references('addresses.id')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts')
};
