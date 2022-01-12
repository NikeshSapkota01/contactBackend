import bookshelf from "../db";

const TABLE_NAME = "contact";

class Contact extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Contact;
