function apiResponse(req, res, data, statusCode, message) {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  })
}

export default apiResponse
