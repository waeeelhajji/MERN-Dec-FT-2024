import CakeController from "../controllers/cake.controller.js";
import { Router } from "express"


const router = Router()

router.route("/cake")
    .post(CakeController.create)
    .get(CakeController.ReadAll)


router.route("/cake/:id")
    .get(CakeController.ReadOne)
    .put(CakeController.update)
    .delete(CakeController.DeleteOne)




export default router