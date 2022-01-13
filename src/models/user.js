import bookshelf from "../db";
import Contact from "./contact";

const TABLE_NAME = "user";

/**
 * User model.
 */
class User extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }

  contacts() {
    return this.hasMany(Contact, "userId");
  }
}

export default User;
