import logger from "loglevel";

const getLogLevel = () => {
  if (process.env.NODE_ENV === "production") {
    return logger.levels.SILENT;
  }

  if (process.env.NODE_ENV === "test") {
    return logger.levels.WARN;
  }

  return logger.levels.TRACE;
};

logger.setLevel(getLogLevel());

export default logger;
