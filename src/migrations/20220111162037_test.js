const table_name = "user";

exports.up = function (knex) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(table_name);
};
