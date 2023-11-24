import express from "express";
import { UserModel } from "../models/user.model";
import authentication from "../helpers/authentication";
import random from "../helpers/random";

export namespace AurhService {
  export const login = async (
    req: express.Request,
    res: express.Response,
  ): Promise<Record<string, any>> => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.sendStatus(400);
      }

      const user = await UserModel.findOne({ email }).select(
        "+authentication.salt +authentication.password",
      );
      if (!user) {
        return res.sendStatus(400);
      }
      const expectedHash = authentication({
        salt: user.authentication?.salt as string,
        password,
      });

      if (user.authentication?.password !== expectedHash) {
        return res.sendStatus(403);
      }
      const salt = random();
      user.authentication.sessionToken = authentication({
        salt,
        password: user?._id.toString(),
      });

      await user.save();

      res.cookie(
        process.env.COOKIE_NAME as string,
        user.authentication.sessionToken,
        { domain: "localhost", path: "/" },
      );

      const loggedInUser = {
        _id: user._id,
        email: user.email,
        username: user.username,
        sessionToken: user.authentication.sessionToken,
      };
      return res.status(200).json(loggedInUser).end();
    } catch (error) {
      console.log(`Login: \n${error}`);
      return res.sendStatus(400);
    }
  };

  export const register = async (
    req: express.Request,
    res: express.Response,
  ): Promise<Record<string, any>> => {
    try {
      const { email, password, username } = req.body;
      if (!email || !password || !username) {
        return res.sendStatus(400);
      }

      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.sendStatus(400);
      }
      const salt = random();
      const user = await UserModel.create({
        email,
        username,
        authentication: {
          salt,
          password: authentication({ salt, password }),
        },
      });
      const registeredUser = {
        _id: user._id,
        email: user.email,
        username: user.username,
      };
      return res.status(200).json(registeredUser).end();
    } catch (error) {
      console.log(`Register: \n${error}`);
      return res.sendStatus(400);
    }
  };
}
