/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const table_name = "test3";

exports.seed = function (knex) {
  return knex(table_name)
    .del()
    .then(() => {
      return knex(table_name).insert([
        {
          email: "nikesh@gmail.com",
          password: "Abcd@123",
          first_name: "Nikesh",
          last_name: "Sapkota",
        },
        {
          email: "nikesh1@gmail.com",
          password: "Abcd@123",
          first_name: "Nikesh",
          last_name: "Sapkota",
        },
        {
          email: "abc@gmail.com",
          password: "Abcd@123",
          first_name: "Nikesh",
          last_name: "Sapkota",
        },
      ]);
    });
};
