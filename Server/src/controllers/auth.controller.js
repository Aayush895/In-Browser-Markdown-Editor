import { StatusCodes } from "http-status-codes";
import apiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { signupService } from "../services/auth.service.js";

export async function signup(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const profilePic = req.file.path;
    if (!username || !email || !password || !profilePic) {
      throw new ApiError(
        "User info is missing, please check once!",
        StatusCodes.NO_CONTENT,
      );
    }

    const response = await signupService({
      username,
      email,
      password,
      profilePic,
    });

    return apiResponse(
      req,
      res,
      response,
      StatusCodes.OK,
      "User was registered successfully",
    );
  } catch (error) {
    next(error);
  }
}
