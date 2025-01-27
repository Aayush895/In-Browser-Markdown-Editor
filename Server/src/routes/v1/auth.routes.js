import express from "express";
import {
  signup,
  login,
  refreshTokens,
} from "../../controllers/auth.controller.js";
import { validateRequestData } from "../../middlewares/zodMiddleware.js";
import { upload } from "../../config/multerConfig.js";
import { userRegisterationSchema } from "../../validators/userSchema.js";

const router = express.Router();

router.post(
  "/signup",
  validateRequestData(userRegisterationSchema),
  upload.single("profilePic"),
  signup,
);
router.post("/login", validateRequestData(userRegisterationSchema), login);
// router.post("/logout", logout);
router.post("/refresh", refreshTokens);

export default router