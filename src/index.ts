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

const server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.log("Server is running in port: " + process.env.PORT),
);

mongoose.Promise = Promise;

mongoose.connect(process.env.DB_CONNECTION_STRING as string);

mongoose.connection.on("connected", () =>
  console.log("MongoDB Atlas connected successfully!"),
);

mongoose.connection.on("disconnected", () =>
  console.log("MongoDB Atlas disconnected."),
);

mongoose.connection.on("error", (error: Error) =>
  console.log(`MongoDB Atlas connection error: ${error}`),
);
