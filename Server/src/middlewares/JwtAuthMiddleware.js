import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";
import ApiError from "../utils/ApiError.js";
async function jwtAuth(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      let token = req.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, JWT_SECRET);

      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return next(
          new ApiError("Access token has expired", StatusCodes.UNAUTHORIZED),
        );
      }

      // Handle specific JWT errors (expired or invalid)
      if (error instanceof jwt.JsonWebTokenError) {
        return next(
          new ApiError(
            "Invalid or malformed access token",
            StatusCodes.UNAUTHORIZED,
          ),
        );
      }

      // Catch any other errors (e.g., database issues or unexpected errors)
      return next(
        new ApiError(
          error?.message || "Internal server error",
          StatusCodes.INTERNAL_SERVER_ERROR,
        ),
      );
    }
  }
}

export default jwtAuth;
