import { UserController } from "../controllers/user.controller";
import express from "express";

export default (router: express.Router) => {
  router.get("/users", UserController.getAllUsers);
  router.get("/users/:id", UserController.getById);
  router.patch("/users/:id", UserController.updateUser);
  router.delete("/users/:id", UserController.deleteUser);
  return router;
};
