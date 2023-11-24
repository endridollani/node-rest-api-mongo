import express from "express";
import { AuthController } from "../controllers/auth.controller";

/**
 * @swagger
 *    tags:
 *     name: Auth
 *     description: User Authentication APIs
 */
export default (router: express.Router) => {
  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login
   *     parameters:
   *      - in: path
   *        name: email
   *        schema:
   *            type: string
   *        required: true
   *        description: User email
   *      - in: path
   *        name: password
   *        schema:
   *             type: string
   *        required: true
   *        description: User Password
   *     tags: [Auth]
   */
  router.post("/auth/login", AuthController.login);
   /**
   * @swagger
   * /auth/register:
   *   post:
   *     summary: Register
   *     parameters:
   *      - in: path
   *        name: username
   *        schema:
   *            type: string
   *        required: true
   *        description: User username
   *      - in: path
   *        name: email
   *        schema:
   *            type: string
   *        required: true
   *        description: User email
   *      - in: path
   *        name: password
   *        schema:
   *             type: string
   *        required: true
   *        description: User Password
   *     tags: [Auth]
   */
  router.post("/auth/register", AuthController.register);
  return router;
};
