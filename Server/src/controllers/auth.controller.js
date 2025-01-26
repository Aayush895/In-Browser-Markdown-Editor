import { StatusCodes } from "http-status-codes";
import apiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { signupService, loginService } from "../services/auth.service.js";

export async function signup(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const profilePic = req.file.path;
    if (!username || !email || !password || !profilePic) {
      throw new ApiError(
        "User info is missing, please check the provided info once!",
        StatusCodes.BAD_REQUEST,
      );
    }

    const responseData = await signupService({
      username,
      email,
      password,
      profilePic,
    });

    return apiResponse(
      req,
      res,
      responseData,
      StatusCodes.OK,
      "User was registered successfully",
    );
  } catch (error) {
    next(error);
  }
}

// Whenever the user logs in they should receive an accessToken as a response and the refreshToken should be stored inside the cookie

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApiError(
        "User email or password is missing. Please try again!",
        StatusCodes.BAD_REQUEST,
      );
    }

    const { userInfo, accessToken, refreshToken } = await loginService({
      email,
      password,
    });

    const responseData = { userInfo, accessToken };
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    return apiResponse(
      req,
      res,
      responseData,
      StatusCodes.OK,
      "User was logged in successfully!",
    );
  } catch (error) {
    next(error);
  }
}
