const table_name = "contact";

exports.up = function (knex) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("phone").notNullable();
    table.string("photograph");
    table.timestamps(true, true);
    table
      .integer("user_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("user");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(table_name);
};
