import {Router} from "express";
import userController from "../controller/userController";

const router: Router = Router();

router.post("/add", userController.create);
router.get("/:id", userController.read);
router.put("/edit/:id", userController.update);
router.delete("/delete/:col/:id", userController.delete);

export default router;
