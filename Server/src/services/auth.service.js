import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { checkUser, registerUserRepo } from "../repository/auth.repository.js";
import { uploadOnCloudinary } from "../config/cloudinaryConfig.js";

export async function signupService(userData) {
  try {
    const doesUserExist = await checkUser(userData.email);
    if (doesUserExist) {
      throw new ApiError("User already exists!", StatusCodes.BAD_REQUEST);
    }

    const uploadedPicUrl = await uploadOnCloudinary(userData.profilePic);
    if (!uploadedPicUrl) {
      throw new ApiError("Profile pic upload failed", StatusCodes.BAD_REQUEST);
    }

    userData.profilePic = uploadedPicUrl.url;
    const registerResponse = await registerUserRepo(userData);

    return registerResponse;
  } catch (error) {
    if (!(error instanceof ApiError)) {
      throw new ApiError(
        error.message || "An unexpected error occured, please try again later!",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }

    throw error;
  }
}
