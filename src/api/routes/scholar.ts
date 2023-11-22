import { Router } from "express";
import * as ScholarController from "../controllers/scholar";

const router = Router();

router.get("/", ScholarController.getAll);

router.get("/disabled", ScholarController.getDisabled);

router.get("/filter/:filter", ScholarController.getByFilter);

router.get("/tutor/:id", ScholarController.getByTutorId);

router.get("/:id", ScholarController.getById);

router.get("/user/:userId", ScholarController.getByUserId);

router.post("/", ScholarController.post);

router.put("/:id", ScholarController.put);

router.delete("/disable/:id", ScholarController.disable);

router.patch("/enable/:id", ScholarController.enable);

router.delete("/:id", ScholarController.remove);

export default router;