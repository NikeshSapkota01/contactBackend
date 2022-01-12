const table_name = "user";

exports.seed = function (knex) {
  return knex(table_name)
    .del()
    .then(() => {
      return knex(table_name).insert([
        {
          email: "nikesh@gmail.com",
          password: "Abcd@123",
        },
        {
          email: "nikesh1@gmail.com",
          password: "Abcd@123",
        },
        {
          email: "abc@gmail.com",
          password: "Abcd@123",
        },
      ]);
    });
};
