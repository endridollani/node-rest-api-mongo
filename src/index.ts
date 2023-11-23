import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

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
