import { Router } from "express";
import * as authenticationController from "../controllers/authentication";

const router = Router();

router.post("/sign_up", authenticationController.signUp);

router.post("/sign_in", authenticationController.signIn);

router.get("/lol", (req, res) => {
    res.send("lol");
});

export default router;
