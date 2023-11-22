import { Router } from "express";
import * as ScholarshipController from "../controllers/scholarship";

const router = Router();

router.get("/", ScholarshipController.getAll);

router.get("/disabled", ScholarshipController.getDisabled);

router.get("/filter/:filter", ScholarshipController.getByFilter);

router.get("/:id", ScholarshipController.getById);

router.post("/", ScholarshipController.post);

router.put("/:id", ScholarshipController.put);

router.delete("/disable/:id", ScholarshipController.disable);

router.patch("/enable/:id", ScholarshipController.enable);

router.delete("/:id", ScholarshipController.remove);

export default router;