import { Request, Response } from "express";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fireAuth from "../config/fireAuth"
import firebase from "../config/firebase";
import User from "../model/userModel";

export default class UserController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, pass } = req.body;
    try {
      fireAuth.automaticDataCollectionEnabled
      User.schemaUserLogin.validateAsync({ email, pass }).then(async val => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, val.email, val.pass)
          .then((userCredential) => {
            res.status(200).send(userCredential.user.uid)
          })
          .catch((error) => {
            res.status(400).send(error.code)
          });
      }).catch(e => {
        res.status(400).send(`Error: ${e.message}`)
      })
    } catch (e) {
      res.status(400).send(`Error: ${e}`)
    }
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const { email, userName, pass } = req.body;
    try {
      User.schemaUser.validateAsync({ email, userName, pass }).then(async val => {
        await firebase
          .auth
          .createUser({ email: val.email, password: val.pass, displayName: val.userName })
          .then((userCredential) => {
            const userID = userCredential.uid
            const { firstName, lastName, age } = req.body;
            User.schemaInfo.validateAsync({ firstName, lastName, age }).then(async val => {
              await firebase
                .db
                .collection("Info")
                .doc(userID)
                .set(val)
                .then(() => {
                  const { zipCode, uf, city, street, streetNumb, district, complement } = req.body;
                  User.schemaAdds.validateAsync({ zipCode, uf, city, street, streetNumb, district, complement }).then(async val => {
                    await firebase
                      .db
                      .collection("Address")
                      .doc(userID)
                      .set(val)
                      .then(() => {
                        res.status(201).send(userID)
                      })
                  }).catch(e => {
                    res.status(400).send(`Error: ${e.message}`)
                  })
                })
            }).catch(e => {
              res.status(400).send(`Error: ${e.message}`)
            })
          })
          .catch(e => {
            res.status(400).send(`Error: ${e.message}`)
          })
      }).catch(e => {
        res.status(400).send(`Error: ${e.message}`)
      })
    } catch (e) {
      res.status(400).send(`Error: ${e}`)
    }
  }

  public static async createOne(req: Request, res: Response): Promise<void> {
    if (req.params.col === "Address") {
      const { zipCode, uf, city, street, streetNumb, district, complement } = req.body;
      try {
        User.schemaAdds.validateAsync({ zipCode, uf, city, street, streetNumb, district, complement }).then(async val => {
          await firebase
            .db
            .collection(req.params.col)
            .doc(req.params.id)
            .set(val)
            .then(() => {
              res.status(201).send("Create Sucess!")
            })
        }).catch(e => {
          res.status(400).send(`Error: ${e.message}`)
        })
      } catch (e) {
        res.status(400).send(`Error: ${e}`)
      }
    }
    else if (req.params.col === "Info") {
      const { firstName, lastName, age } = req.body;
      try {
        User.schemaInfo.validateAsync({ firstName, lastName, age }).then(async val => {
          await firebase
            .db
            .collection(req.params.col)
            .doc(req.params.id)
            .set(val)
            .then(() => {
              res.status(201).send("Create Sucess!")
            })
        }).catch(e => {
          res.status(400).send(`Error: ${e.message}`)
        })
      } catch (e) {
        res.status(400).send(`Error: ${e}`)
      }
    }
    else {
      res.status(400).send(`Error: Column not found`)
    }
  }

  public static async read(req: Request, res: Response): Promise<void> {
    try {
      const address =
        await firebase
          .db
          .collection("Address")
          .doc(req.params.id)
          .get()

      const info =
        await firebase
          .db
          .collection("Info")
          .doc(req.params.id)
          .get()

      res.status(200).json([address.data(), info.data()])
    } catch (e) {
      res.status(400).send(`Error: ${e}`)
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    let safe = true
    let schema: any = undefined
    let objValid = {}

    if (req.params.col === 'Info') {
      const { firstName, lastName, age } = req.body;
      schema = User.schemaInfo
      objValid = { firstName, lastName, age }
    }
    else if (req.params.col === 'Address') {
      const { zipCode, uf, city, street, streetNumb, district, complement } = req.body;
      schema = User.schemaAdds
      objValid = { zipCode, uf, city, street, streetNumb, district, complement }
    }
    else {
      safe = false
      res.status(400).send("invalid column!")
    }

    if (safe) {
      try {
        schema.validateAsync(objValid).then(async (val: { [x: string]: any; } & FirebaseFirestore.AddPrefixToKeys<string, any>) => {
          await firebase
            .db
            .collection(req.params.col)
            .doc(req.params.id)
            .update(val)
            .then(() => {
              res.status(201).send('Update Sucess!')
            })
        }).catch((e: { message: any; }) => {
          res.status(400).send(`Error: ${e.message}`)
        })
      } catch (e) {
        res.status(400).send(`Error: ${e}`)
      }
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      await firebase
        .db
        .collection(req.params.col)
        .doc(req.params.id)
        .delete()
        .then(() => {
          res.status(204).end()
        })
    } catch (e) {
      res.status(400).send(`Error: ${e}`)
    }
  }
}