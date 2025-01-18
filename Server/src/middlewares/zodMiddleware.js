// Returns a zod validation middleware which will be used to validate the incoming request from client
import ApiError from "../utils/ApiError.js";
import { ZodError } from "zod";

export function validateRequestData(schema) {
  return async function validationMiddleware(req, res, next) {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      // If validation fails, handle the error

      // Check if the error is an instance of ZodError
      if (error instanceof ZodError) {
        // Gather all the validation errors in a structured format
        const errorMessages = error.errors.map((err) => {
          // Construct a custom error message for each validation failure
          switch (err.message) {
            case "Required": // Field is required but not provided
              return `${err.path.join(".")} is required.`;
            case "Invalid input": // Custom case for invalid input (if applicable)
              return `${err.path.join(".")} has an invalid value.`;
            case "Too small": // If the value is too short, you can catch it
              return `${err.path.join(".")} is too short.`;
            case "Too large": // If the value is too long, catch that too
              return `${err.path.join(".")} is too long.`;
            default:
              return `${err.path.join(".")} has an error: ${err.message}`;
          }
        });

        // Combine the error messages
        const formattedMessages = errorMessages.join(", ");

        // Create a custom ApiError with the validation failure message
        const apiError = new ApiError(formattedMessages, 400);

        // Pass the error to the global error handler
        return next(apiError);
      }

      // If the error is not a ZodError, pass it to the next middleware (could be unexpected error)
      next(error);
    }
  };
}
