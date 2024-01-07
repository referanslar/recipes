import express from "express";
import swaggerUI from "swagger-ui-express";

import { swaggerSpec } from "../utils/swagger.util.js";
import config from "../config/api.config.js";

const router = express.Router();

/* This allows developers to view and interact with the API documentation in the browser during development. */
if (config.NODE_ENV === "development") {
  router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

export default router;
