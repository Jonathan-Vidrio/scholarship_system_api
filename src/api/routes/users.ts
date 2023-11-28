import { Router } from 'express';
import * as userController from '../controllers/user';
import { isAdmin, isSession } from "../middlewares/session";

const router = Router();

router.get("/", isAdmin, userController.getAll);

router.get("/role/:roleId", isAdmin, userController.getByRole);

router.get("/filter/:filter", isAdmin, userController.getByFilter);

router.get("/disabled", isAdmin, userController.getDisabled);

router.get("/:id", isSession, userController.getById);

router.get("/email/:email", isSession, userController.getByEmail);

router.post("/", isAdmin, userController.post);

router.put("/", isSession, userController.put);

router.delete("/disable/:id", isAdmin, userController.disable);

router.patch("/enable/:id", isAdmin, userController.enable);

router.delete("/:id", isAdmin, userController.remove);

export default router;