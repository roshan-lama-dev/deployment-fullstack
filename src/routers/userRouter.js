import express from "express";
import { createUser, getUser } from "../models/userModel/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "The new user has been added",
        })
      : res.json({
          status: "error",
          message: "Cannot create the new user",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getUser();
    // the result is coming inside the object as inside the array
    result?._id
      ? res.json({
          status: "success",
          message: "The new user has been added",
        })
      : res.json({
          status: "error",
          message: "Cannot create the new user",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
