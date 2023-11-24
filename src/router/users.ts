import express from "express";

import isAuth from "../middleware/isAuth";
import isLoggedInUser from "../middleware/isLoggedInUser";

import { UserController } from "../controllers/user.controller";

export default (router: express.Router) => {
  router.get("/users", isAuth, UserController.getAllUsers);
  router.get("/users/:id", isAuth, UserController.getById);
  router.patch("/users/:id", isAuth, isLoggedInUser, UserController.updateUser);
  router.delete(
    "/users/:id",
    isAuth,
    isLoggedInUser,
    UserController.deleteUser,
  );
  return router;
};
