import { Sequelize } from "sequelize";

import config from "../config/api.config.js";

/* Creating a new instance of the Sequelize class and assigning it to the variable `sequelize`. */
const sequelize = new Sequelize(config.DB_URI);

export default sequelize;
