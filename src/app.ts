import { config } from "dotenv";
// Load environment variables from .env file

config();
import express from "express";
import DatabaseConfig from "./config/databaseConfig";
import mongoose from "mongoose";
import compression from "compression";
import Controllers from "./controllers";

const app = express();

const init = () => {
  DatabaseConfig.connectDB();
  mongoose.connection.once("open", () => {
    app.emit("ready");
  });

  app.use(express.json());
  app.use(compression());

  app.use("/api/v1", Controllers);

  const port = process.env.PORT || 8010;
  app.listen(port, () => {
    console.log(`Listening: ${process.env.HOST || "localhost"}:${port}`);
  });
};

init();

export default app;
