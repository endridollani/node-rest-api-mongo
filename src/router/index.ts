import express from "express";
import users from "./users";
import auth from "./auth";

const router = express.Router();

export default (): express.Router => {
  auth(router);
  users(router);
  return router;
};
