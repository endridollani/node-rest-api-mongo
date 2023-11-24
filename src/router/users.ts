import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
} from "controllers/user.controller";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.patch("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);
  return router;
};
