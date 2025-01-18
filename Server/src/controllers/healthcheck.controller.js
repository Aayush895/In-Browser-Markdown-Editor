import { StatusCodes } from "http-status-codes";
import apiResponse from "../utils/ApiResponse.js";

export function healthcheckController(_, res, next) {
  try {
    return apiResponse(_, res, {}, StatusCodes.OK, "Route is working fine!");
  } catch (error) {
    next(error);
  }
}
