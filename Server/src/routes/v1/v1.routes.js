import express from "express";
import healthcheckRouter from "./healthcheck.routes.js";

const router = express.Router();

router.use("/healthcheck", healthcheckRouter);

export default router;
