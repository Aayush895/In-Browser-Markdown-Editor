import express from "express";
import healthcheckRouter from "./healthcheck.routes.js";
import authRouter from "./auth.routes.js";
import { upload } from "../../config/multerConfig.js";
import { validateRequestData } from "../../middlewares/zodMiddleware.js";
import { userRegisterationSchema } from "../../validators/userSchema.js";

const router = express.Router();

router.use("/healthcheck", healthcheckRouter);
router.use(
  "/auth",
  upload.single("profilePic"),
  validateRequestData(userRegisterationSchema),
  authRouter,
);

export default router;
