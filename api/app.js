/* These lines of code are importing the `express` module in JavaScript. */
import express from "express";

/* These lines import middleware for Express app functionality and security. */
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

/* Importing the 'http-errors' library for creating HTTP errors and the custom error handler middleware. */
import createError from "http-errors";

/* This allows the application to access and use the configuration settings defined in the `api.config.js` file. */
import config from "./config/api.config.js";

/* Router */
import routes from "./routes/api.routes.js";

/* Creating an instance of the Express application. */
const app = express();

/* The `cors()` middleware is used to enable Cross-Origin Resource Sharing (CORS) in the
Express application. CORS is a mechanism that allows resources (e.g., APIs) on a web page to be
requested from another domain outside the domain from which the resource originated. */
app.use(
  cors({
    origin: config.ALLOWED_ORIGIN,
  })
);

/* `helmet()` is a middleware function that adds various HTTP headers to enhance the security
of the Express application. It helps protect the application from common security vulnerabilities
such as cross-site scripting (XSS), clickjacking, and other attacks. */
app.use(helmet());

/* `express.json()` is a middleware function that parses incoming requests with JSON payloads. */
app.use(express.json());

/* `compression()` is a middleware function that compresses the response bodies sent by the
server before sending them to the client. It uses the compression algorithm to reduce the size of
the response, which helps in improving the performance of the application by reducing the amount of
data that needs to be transferred over the network. This can be particularly useful when dealing
with large responses, such as when serving static files or sending JSON data. */
app.use(compression());

/* This is responsible for handling all the routes  related to the API functionality of the application. */
app.use("/api", routes);

/* Middleware function that is used to handle requests for routes that are not found. */
app.use((req, res, next) => {
  next(createError.NotFound("The page you're looking for doesn't exist."));
});

/* This middleware function is executed whenever an error occurs during the processing of a request. */
app.use((error, req, res, next) => {
  const errorStatus = error.statusCode || 500;
  const errorMessage = error.message || "Internal Server Error";

  res.status(errorStatus).json({
    message: errorMessage,
  });

  next();
});

export default app;
