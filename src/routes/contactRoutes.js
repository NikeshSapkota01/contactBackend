import { Router } from "express";

import * as contactController from "../controllers/contact";
import { authenticate } from "../validators/userAuthentication";

import { contactValidation, findContact } from "../validators/contactValidator";

const router = Router();

router.get("/", authenticate, contactController.fetchAll);
router.post("/", authenticate, contactValidation, contactController.create);
router.get("/:id", authenticate, contactController.fetchById);
router.put(
  "/:id",
  authenticate,
  findContact,
  contactValidation,
  contactController.update
);
router.delete(
  "/:id",
  authenticate,
  findContact,
  contactController.deleteContact
);

export default router;
