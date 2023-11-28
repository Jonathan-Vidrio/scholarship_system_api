import { Router } from "express";
import * as authenticationController from "../controllers/authentication";

const router = Router();

router.post("/sign_up", authenticationController.signUp);

router.post("/sign_in", authenticationController.signIn);

router.get("/verify_scholar/:tutorId/:curp", authenticationController.verifyScholar);

export default router;
