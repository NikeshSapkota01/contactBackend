import { Router } from "express";

import * as userController from "../controllers/users";

const router = Router();

router.get("/", userController.fetchAll);

export default router;
