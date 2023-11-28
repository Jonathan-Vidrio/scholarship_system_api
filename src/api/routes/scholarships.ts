import { Router } from "express";
import * as ScholarshipController from "../controllers/scholarship";
import { isAdmin, isSession } from "../middlewares/session";

const router = Router();

router.get("/", isAdmin, ScholarshipController.getAll);

router.get("/disabled", isAdmin, ScholarshipController.getDisabled);

router.get("/filter/:filter", isSession, ScholarshipController.getByFilter);

router.get("/:id", isSession, ScholarshipController.getById);

router.post("/", isAdmin, ScholarshipController.post);

router.put("/:id", isAdmin, ScholarshipController.put);

router.delete("/disable/:id", isAdmin, ScholarshipController.disable);

router.patch("/enable/:id", isAdmin, ScholarshipController.enable);

router.delete("/:id", isAdmin, ScholarshipController.remove);

export default router;