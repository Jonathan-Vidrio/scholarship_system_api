import { Router } from 'express';
import {isAdmin, isSession} from '../middlewares/session';
import * as tutorController from '../controllers/tutor';

const router = Router();

router .get("/", isAdmin, tutorController.getAll);

router.get("/filter/:filter", isAdmin, tutorController.getByFilter);

router.get("/disabled", isAdmin, tutorController.getDisabled);

router.get("/:id", isAdmin, tutorController.getById);

router.get("/worker/:workerId", isSession, tutorController.getByWorkerId);

router.post("/", isAdmin, tutorController.post);

router.put("/:id", isAdmin, tutorController.put);

router.patch("/enable/:id", isAdmin, tutorController.enable);

router.delete("/disable/:id", isAdmin, tutorController.disable);

router.delete("/:id", isAdmin, tutorController.remove);

export default router;