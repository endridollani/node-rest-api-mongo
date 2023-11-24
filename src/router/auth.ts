import express from "express";
import { AuthController } from "../controllers/auth.controller";

export default (router: express.Router) => {
  router.post("/auth/login", AuthController.login);
  router.post("/auth/register", AuthController.register);
  return router;
};
