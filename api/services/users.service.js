import createError from "http-errors";

import userRepository from "../repositories/user.repository.js";

class UsersService {
  /**
   * The function creates a new user.
   * @param user - The `user` parameter is an object that represents the user to be created.
   * @returns an object that contains a message and the user's email address.
   */
  async createUser(user) {
    const userExists = await this.checkUserExists(user.email);

    if (userExists) {
      throw new createError.Conflict(`User already exists with the provided email.`);
    }

    const createdUser = await userRepository.createUser(user);

    return {
      message: "User successfully created.",
      user: {
        email: createdUser.email,
      },
    };
  }

  /**
   * The function checks if a user with a given email exists in the user repository.
   * @param email - The `email` parameter is a string that represents the email address of the user you
   * want to check for existence.
   * @returns a boolean value.
   */
  async checkUserExists(email) {
    const user = await userRepository.getUserByEmail(email);

    return user ? true : false;
  }
}

export default new UsersService();
