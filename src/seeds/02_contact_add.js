/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const table_name = "contact";

exports.seed = function (knex) {
  return knex(table_name)
    .del()
    .then(() => {
      return knex(table_name).insert([
        {
          name: "Rabin",
          phone: "9860000000",
          photograph: "",
          user_id: "1",
        },
        {
          name: "Appu",
          phone: "9980000000",
          photograph: "",
          user_id: "1",
        },
        {
          name: "ram",
          phone: "9861000000",
          photograph: "",
          user_id: "2",
        },
        {
          name: "hari",
          phone: "9841000000",
          photograph: "",
          user_id: "2",
        },
      ]);
    });
};
