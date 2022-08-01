import { NextFunction } from "connect";
import { Request, Response } from "express";
import User from "../model/userModel"
// import error from "../utils/error"

export default class UserController {
  public static create(req: Request, res: Response, next: NextFunction): void {
    res.send("CREATE")
  }

  public static read(req: Request, res: Response, next: NextFunction): void {
    res.send("READ")
  }

  public static update(req: Request, res: Response, next: NextFunction): void {
    res.send("UPDATE")
  }

  public static delete(req: Request, res: Response, next: NextFunction): void {
    res.send("DELETE")
  }
}
