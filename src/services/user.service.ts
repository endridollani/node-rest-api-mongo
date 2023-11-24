import express from "express";
import { UserModel } from "../models/user.model";

export namespace UserService {
  export const getAll = async (req: express.Request, res: express.Response) => {
    try {
      const users = await UserModel.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const getById = async (
    req: express.Request,
    res: express.Response,
  ) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.sendStatus(404);
      }

      const user = await UserModel.findById(id);

      if (!user) {
        return res.sendStatus(404);
      }

      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const deleteUser = async (
    req: express.Request,
    res: express.Response,
  ) => {
    try {
      const { id } = req.params;

      const deletedUser = await UserModel.findOneAndDelete({ _id: id });

      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const updateUser = async (
    req: express.Request,
    res: express.Response,
  ) => {
    try {
      const { id } = req.params;
      const { username } = req.body;

      if (!username) {
        return res.sendStatus(404);
      }

      const user = await UserModel.findById(id);

      if (!user) {
        return res.sendStatus(404);
      }

      user.username = username;
      await user.save();

      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export const getBySessionToken = async (
    sessionToken: string,
    res: express.Response,
  ) => {
    const user = await UserModel.findOne({
      "authentication.sessionToken": sessionToken,
    });

    if (!user) {
      res.sendStatus(404);
    }

    return user;
  };
}
