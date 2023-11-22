import { Router } from 'express';
import * as userController from '../controllers/user';

const router = Router();

router.get("/", userController.getAll);

router.get("/role/:roleId", userController.getByRole);

router.get("/filter/:filter", userController.getByFilter);

router.get("/disabled", userController.getDisabled);

router.get("/:id", userController.getById);

router.get("/email/:email", userController.getByEmail);

router.post("/", userController.post);

router.put("/", userController.put);

router.delete("/disable/:id", userController.disable);

router.patch("/enable/:id", userController.enable);

router.delete("/:id", userController.remove);

export default router;