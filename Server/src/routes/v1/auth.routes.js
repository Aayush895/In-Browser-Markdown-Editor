import express from "express";
import {
  signup,
  login,
  logout,
  refreshTokens,
} from "../../controllers/auth.controller.js";
import { validateRequestData } from "../../middlewares/zodMiddleware.js";
import { upload } from "../../config/multerConfig.js";
import { userRegisterationSchema } from "../../validators/userSchema.js";
import jwtAuth from "../../middlewares/JwtAuthMiddleware.js";

const router = express.Router();

router.post(
  "/signup",
  upload.single("profilePic"),
  validateRequestData(userRegisterationSchema),
  signup,
);
router.post("/login", validateRequestData(userRegisterationSchema), login);
router.post("/logout", jwtAuth, logout);
router.post("/refresh", refreshTokens);

export default router;
