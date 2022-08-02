import {Router} from "express";
import userController from "../controller/userController";

const router: Router = Router();

router.post("/", userController.create);
router.get("/:id", userController.read);
router.put("/:col/:id", userController.update);
router.delete("/:col/:id", userController.delete);

export default router;
