import express from "express";

import { UserService } from "services/user.service";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response,
) => await UserService.getAll(req, res);

export const updateUser = async (req: express.Request, res: express.Response) =>
  await UserService.updateUser(req, res);

export const deleteUser = async (req: express.Request, res: express.Response) =>
  await UserService.deleteUser(req, res);
