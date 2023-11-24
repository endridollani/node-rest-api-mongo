import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const initServer = async () => {
  console.log("Initializing server... ");
  try {
    const server = http.createServer(app);

    server.listen(process.env.PORT, () =>
      console.log("Server is running on port: " + process.env.PORT),
    );
  } catch (e) {
    console.log("Error running server on port: " + process.env.PORT);
  }
};

const connectDb = async () => {
  console.log("Connecting with MongoDB Atlas... ");
  try {
    mongoose.Promise = Promise;

    mongoose.connect(process.env.DB_CONNECTION_STRING as string);
    mongoose.connect(process.env.DB_CONNECTION_STRING as string);

    mongoose.connection.on("connected", () =>
      console.log("MongoDB Atlas connected successfully!"),
    );

    mongoose.connection.on("disconnected", () =>
      console.log("MongoDB Atlas disconnected."),
    );
  } catch (e) {
    console.log("Connecting with MongoDB Atlas failed: ");
  }
};

initServer()
  .then(() => connectDb())
  .then(() => app.use("/", router()));
