import {Router} from "express";
import userController from "../controller/UserController";

const router: Router = Router();

router.post("/add", userController.create);
router.get("/get/:id", userController.read);
router.put("/edit/:id", userController.update);
router.delete("/delete/:id", userController.delete);

export default router;
