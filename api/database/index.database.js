import { Sequelize } from "sequelize";

import config from "../configs/api.config.js";

/* Creating a new instance of the Sequelize class and assigning it to the variable `sequelize`. */
const sequelize = new Sequelize(config.database.uri);

export default sequelize;
