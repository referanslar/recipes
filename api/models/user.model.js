import bcrypt from "bcrypt";
import sequelize from "../database/index.database.js";

import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("User", "Editor", "Admin"),
      allowNull: false,
      defaultValue: "User",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

User.beforeCreate(async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
});

User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
});

User.prototype.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default User;
