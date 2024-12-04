import { Router } from "express";
import userController from "../controllers/user.controller.js";
const router = Router()

// READ ALL 
router.route("/users")
    .get(userController.ReadAll)
    .post(userController.create);


router.route("/users/:id")
    .get(userController.ReadOne)
    .put(userController.update)
    .delete(userController.delete);


export default router;