import winston from "winston";

/* Configuration for the file transports in the logger */
const fileTransports = {
  level: "error",
  filename: "./logs/errors.log",
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint()
  ),
};

/* Configuration for the console transports in the logger */
const consoleTransports = {
  level: "debug",
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const ts = timestamp.slice(0, 19).replace("T", " ");
      return `${ts} [${level.toUpperCase()}]: ${message}`;
    })
  ),
};

/* Creating a logger object using the `winston` library */
export const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(fileTransports),
    new winston.transports.Console(consoleTransports),
  ],
  exitOnError: false,
});
