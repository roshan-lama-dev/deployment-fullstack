import express from "express";
import cors from "cors";
import { connectDatabase } from "./src/config/dbconfig.js";
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());
connectDatabase();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user/transaction", transactionRouter);

app.use("*", (req, res, next) => {
  const errorCode = 404;
  const error = {
    status: errorCode,
    message: "404 error! Page not found",
  };

  next(error);
  console.log(error);
});

app.use((error, req, res, next) => {
  const errorCode = error.errorCode || 500;
  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log("Cannot start the server")
    : console.log(`The server is running at http://localhost:${PORT}`);
});
