import User from "../models/user.model.js";

/* The UserRepository class provides methods to create and retrieve user objects from a database. */
class UserRepository {
  /**
   * The function creates a new user using the User model.
   * @param user - The "user" parameter is an object that contains the information needed to create a new user.
   * @returns a promise that resolves to the created user object.
   */
  async createUser(user) {
    return await User.create(user);
  }

  /**
   * The function `getUserByID` retrieves a user from the database based on their ID.
   * @param id - The `id` parameter is the unique identifier of the user that we want to retrieve from the database.
   * @returns a promise that resolves to the user object with the specified ID.
   */
  async getUserByID(id) {
    return await User.findByPk(id);
  }

  /**
   * The function retrieves a user from the database based on their email address.
   * @param email - The email parameter is the email address of the user you want to find in the database.
   * @returns a promise that resolves to the user object with the specified email address.
   */
  async getUserByEmail(email) {
    return await User.findOne({ where: { email: email } });
  }
}

export default new UserRepository();
