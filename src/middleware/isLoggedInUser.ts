import express from "express";
import { get } from "lodash";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { id } = req.params;

    const currentUserId = get(req, "identity._id");

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (String(currentUserId) !== id) {
      return res.sendStatus(403);
    }
    return next();
  } catch (e) {
    console.log(`isLoggedInUser: \n${e}`);
    res.sendStatus(400);
  }
};
