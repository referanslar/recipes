import envSchema from "env-schema";

const schema = {
  type: "object",
  required: ["NODE_ENV", "PORT", "HOST", "ALLOWED_ORIGIN", "DB_URI"],
  properties: {
    NODE_ENV: {
      type: "string",
      default: "development",
    },
    PORT: {
      type: "number",
      default: 3000,
    },
    HOST: {
      type: "string",
      default: "localhost",
    },
    ALLOWED_ORIGIN: {
      type: "string",
      default: "*",
    },
    DB_URI: {
      type: "string",
    },
  },
};

const config = envSchema({
  schema,
  dotenv: true,
});

export default config;
