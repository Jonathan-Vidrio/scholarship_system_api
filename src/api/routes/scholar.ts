import { Router } from "express";
import * as ScholarController from "../controllers/scholar";
import {isAdmin, isSession} from "../middlewares/session";

const router = Router();

router.get("/", isAdmin, ScholarController.getAll);

router.get("/disabled", isAdmin, ScholarController.getDisabled);

router.get("/filter/:filter", isAdmin, ScholarController.getByFilter);

router.get("/tutor/:id", isAdmin, ScholarController.getByTutorId);

router.get("/:id", isSession, ScholarController.getById);

router.get("/user/:userId", isSession, ScholarController.getByUserId);

router.post("/", isAdmin, ScholarController.post);

router.put("/:id", isSession, ScholarController.put);

router.delete("/disable/:id", isAdmin, ScholarController.disable);

router.patch("/enable/:id", isAdmin, ScholarController.enable);

router.delete("/:id", isAdmin, ScholarController.remove);

export default router;