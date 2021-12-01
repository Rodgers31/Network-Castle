exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('user_name', 128).unique().notNullable();
    table.text('name', 128).notNullable();
    table.text('email', 128).unique().notNullable();
    table.text('password', 128).unique().notNullable();
    table.boolean('admin');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};
