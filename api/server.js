import app from "./app.js";

import config from "./config/api.config.js";
import sequelize from "./database/index.database.js";

import { logger } from "./utils/logger.util.js";

/**
 * The function starts the server and synchronizes the database using Sequelize.
 */
async function start() {
  try {
    await sequelize.sync();

    app.listen(config.PORT, () => {
      logger.info(`Server is running on port ${config.PORT}.`);
    });
  } catch (err) {
    logger.error(err);
  }
}

start();
