import express from "express";
import healthcheckRouter from "./healthcheck.routes.js";
import authRouter from "./auth.routes.js";

const router = express.Router();

router.use("/healthcheck", healthcheckRouter);
router.use(
  "/auth",
  authRouter,
);

export default router;
