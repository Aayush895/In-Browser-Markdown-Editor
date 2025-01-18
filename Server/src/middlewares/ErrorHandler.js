import logger from "../logs/logger.js";

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  logger.error(`Error: ${errStatus} - ${errMsg} - ${err.stack}`);
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: err.stack,
  });
};

// Note: Use this error handler inside controller catch block

export default ErrorHandler;
