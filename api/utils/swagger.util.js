import swaggerJSDoc from "swagger-jsdoc";

/* The code is using the `swagger-jsdoc` library to generate a Swagger specification object. */
export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
});
