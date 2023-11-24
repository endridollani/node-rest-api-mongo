import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);

app.use(bodyParser.json());

/**
 * @async
 * @description Inits server running on the port specified in .env
 */
const initServer = async () => {
  console.log("Initializing server...");
  try {
    const server = http.createServer(app);

    server.listen(process.env.PORT, () => {
      console.log("Server is running on port: " + process.env.PORT);
    });
  } catch (e) {
    console.log(
      `Server initialization on port ${process.env.PORT} failed: \n${e}`,
    );
  }
};

/**
 * @async
 * @description Connects to MongoDb Atlas
 */
const connectDb = async () => {
  console.log("Connecting to MongoDb Atlas...");

  try {
    mongoose.Promise = Promise;

    mongoose.connect(process.env.DB_CONNECTION_STRING as string);

    mongoose.connection.on("connected", () => {
      console.log("MongoDB Atlas connected successfully!");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB Atlas disconnected.");
    });

    mongoose.connection.on("error", (error: Error) => {
      console.log(`MongoDB Atlas connection error: ${error}`);
    });
  } catch (e) {
    console.log(`MongoDB Atlas connection error: ${e}`);
  }
};

initServer().then(() => connectDb());
