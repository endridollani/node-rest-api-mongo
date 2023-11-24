import express from "express";

import isAuth from "../middleware/isAuth";
import isLoggedInUser from "../middleware/isLoggedInUser";

import { UserController } from "../controllers/user.controller";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing APIs
 */

export default (router: express.Router) => {
  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Get All Users
   *     tags: [Users]
   */
  router.get("/users", isAuth, UserController.getAllUsers);
  /**
   * @swagger
   *   /users/{userId}:
   *    get:
   *     summary: Get user by Id
   *     parameters:
   *      - in: path
   *        name: userId
   *        schema:
   *            type: string
   *        required: true
   *        description: Id of the logged in user you want to get.
   *     tags: [Users]
   */
  router.get("/users/:id", isAuth, UserController.getById);
  /**
   * @swagger
   *   /users/{userId}:
   *    patch:
   *     summary: Update user by Id
   *     parameters:
   *      - in: path
   *        name: userId
   *        schema:
   *            type: string
   *        required: true
   *        description: Id of the logged in user you want to update.
   *     tags: [Users]
   */
  router.patch("/users/:id", isAuth, isLoggedInUser, UserController.updateUser);
  /**
   * @swagger
   *   /users/{userId}:
   *    delete:
   *     summary: Delete user by Id
   *     parameters:
   *      - in: path
   *        name: userId
   *        schema:
   *            type: string
   *        required: true
   *        description: Id of the logged in user you want to delete.
   *     tags: [Users]
   */
  router.delete(
    "/users/:id",
    isAuth,
    isLoggedInUser,
    UserController.deleteUser,
  );
  return router;
};
