import { StatusCodes } from "http-status-codes";
import { User } from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";

export async function checkUser(email) {
  try {
    const isUserPresent = await User.findOne({email});
    return isUserPresent;
  } catch (error) {
    throw new ApiError(
      "Database error while checking if user exists",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}

export async function registerUserRepo(userInfo) {
  try {
    const registeredUser = await User.create(userInfo);
    return registeredUser;
  } catch (error) {
    throw new ApiError(
      "Database error while registering the user",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
