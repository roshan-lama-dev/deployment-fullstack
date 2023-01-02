// moudule type import instead of common jsc
import express from "express";
const app = express();
const PORT = 8000;

// middleware to get the body of the request sent

app.use(express.json());

// routers
import task from "./src/routers/taskRouter.js";

// server request and response cycle
// middleware
// app.use("/", (req, res) => {
//   res.json({
//     message: "all the request code",
//   });
// });
// use catches all the request and re-routes the request into the task
// this is also considered middleware and can be used as a filter

app.use("/api/v1/task", task);

// handle all the uncaught error
app.use("*", (req, res, next) => {
  //   res.status(400).json({
  //     status: "error",
  //     message: "404 page not found",
  //   });

//   a sets of query that executes 

  const error = {
    code: 404,
    message: "404 page not found",
  };

  next(error);
});

// global error handling

app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error,
  });
});

// server usees get method by default

// app.listen in used to get access to the backend as browser as a client
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
