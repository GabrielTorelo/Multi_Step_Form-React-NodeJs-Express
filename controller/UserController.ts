import { NextFunction } from "connect";
import { Request, Response } from "express";
import firebase from "../config/firebase"
import User from "../model/userModel"
// import error from "../utils/error"

export default class UserController {
  public static create(req: Request, res: Response, next: NextFunction): void {
    res.send("CREATE")
  }

  public static async read(req: Request, res: Response): Promise<void> {
    const address =
      await firebase
        .collection("Address")
        .doc(req.params.id)
        .get();

    const info =
      await firebase
        .collection("Info")
        .doc(req.params.id)
        .get();
            
    res.status(200).json([address.data(), info.data()])
  }

  public static update(req: Request, res: Response, next: NextFunction): void {
    res.send("UPDATE")
  }

  public static delete(req: Request, res: Response, next: NextFunction): void {
    res.send("DELETE")
  }
}
