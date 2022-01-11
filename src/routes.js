import { Router } from "express";
import userRoutes from "./routes/userRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

router.use("/users", userRoutes);

export default router;
