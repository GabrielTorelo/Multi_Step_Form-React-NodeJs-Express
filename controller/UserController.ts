import { NextFunction } from "connect";
import { Request, Response } from "express";
import firebase from "../config/firebase"
import User from "../model/userModel"
// import error from "../utils/error"

export default class UserController {
  public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.send("CREATE")
  }

  public static async read(req: Request, res: Response): Promise<void> {
    try {
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
    } catch (error) {
      res.status(400).send("Read Error!")
    }
  }

  public static update(req: Request, res: Response, next: NextFunction): void {
    res.send("UPDATE")
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      await firebase
        .collection(req.params.col)
        .doc(req.params.id)
        .delete();

      res.status(204).end()
    } catch (error) {
      res.status(400).send("Delete Error!")
    }
  }
}
