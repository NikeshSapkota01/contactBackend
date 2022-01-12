import "./env";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

import routes from "./routes";

const app = express();
const port = process.env.APP_PORT || 8848;

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((req, res, next) => {
  const error = new Error("Api endpoint not found");
  error.status = 404;
  next(error);
});

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: `Error: ${err.message}` });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
