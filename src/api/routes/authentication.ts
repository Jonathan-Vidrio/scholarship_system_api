import { Router } from "express";
import * as authenticationController from "../controllers/authentication";

const router = Router();

router.post("/sign_up", authenticationController.signUp);

router.post("/sign_in", authenticationController.signIn);

export default router;
