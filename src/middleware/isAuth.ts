import express from "express";
import { merge } from "lodash";
import { UserController } from "../controllers/user.controller";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const sessionToken = req.cookies[process.env.COOKIE_NAME as string];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await UserController.getBySessionToken(
      sessionToken,
      res,
    );

    merge(req, { identity: existingUser });
    return next();
  } catch (e) {
    console.log(`isAuth: \n${e}`);
    res.sendStatus(400);
  }
};
