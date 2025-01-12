class ApiError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    // Capturing stack trace for debugging
    Error.captureStackTrace(this, this.constructor)
  }
}
export default ApiError
