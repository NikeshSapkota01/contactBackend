import { Router } from "express";

import * as contactController from "../controllers/contact";
import { authenticate } from "../validators/userAuthentication";

const router = Router();

router.get("/", authenticate, contactController.fetchAll);

export default router;
