import { Router } from "express";
import userRoutes from "./routes/userRoutes";
import contactRoutes from "./routes/contactRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

router.use("/user", userRoutes);
router.use("/contact", contactRoutes);

export default router;
