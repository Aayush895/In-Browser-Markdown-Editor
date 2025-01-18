import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import logger from "./logs/logger.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routes/api.routes.js";

const app = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(cookieParser());
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);
// localhost:3000/api/v1/auth/
// localhost:3000/api/v1/docs/
// localhost:3000/api/v1/health
app.use("/api", apiRouter);
app.use(ErrorHandler);
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Server is up and running on port: ", PORT);
  } catch (error) {
    console.log(`Error in connecting with the server: ${error}`);
  }
});
