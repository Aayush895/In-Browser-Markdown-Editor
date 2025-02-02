import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { ACCESS_TOKEN_SECRET } from "../config/serverConfig.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/users.model.js";

async function jwtAuth(req, res, next) {
  // Check if authorization header exists
  const authHeader = req.headers.authorization || req.header("Authorization");

  if (!authHeader) {
    return next(new ApiError("No token provided", StatusCodes.UNAUTHORIZED));
  }

  if (!authHeader.startsWith("Bearer ")) {
    return next(new ApiError("Invalid token format", StatusCodes.UNAUTHORIZED));
  }

  try {
    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new ApiError("No token provided", StatusCodes.UNAUTHORIZED);
    }
    console.log(token);
    const decodedToken = await jwt.verify(token, ACCESS_TOKEN_SECRET);
    console.log('TOKEN: ', decodedToken);
    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) {
      throw new ApiError("User not found", StatusCodes.UNAUTHORIZED);
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(
        new ApiError("Access token has expired", StatusCodes.UNAUTHORIZED),
      );
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return next(
        new ApiError(
          "Invalid or malformed access token",
          StatusCodes.UNAUTHORIZED,
        ),
      );
    }

    return next(
      new ApiError(
        error?.message || "Internal server error",
        StatusCodes.INTERNAL_SERVER_ERROR,
      ),
    );
  }
}

export default jwtAuth;
