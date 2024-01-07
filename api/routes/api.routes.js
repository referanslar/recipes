/**
 * Express router instance.
 * @type {Router}
 */
import { Router } from "express";

import swaggerRoute from "./swagger.routes.js";

const router = Router();

router.use("/api-docs", swaggerRoute);

export default router;
