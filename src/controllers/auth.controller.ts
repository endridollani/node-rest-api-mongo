import express from "express";

import { UserService } from "../services/user.service";
import { AurhService } from "../services/auth.service";

export namespace AuthController {
  export const login = async (req: express.Request, res: express.Response) =>
    await AurhService.login(req, res);

  export const register = async (req: express.Request, res: express.Response) =>
    await AurhService.register(req, res);
}
