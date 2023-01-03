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

// this will be for the login function we will be using post method in this to send the parameters as the login details and check it against the database. If the result is true then we can re route the user to the dashboard since it is a good login
//
router.post("/login", async (req, res, next) => {
  try {
    const result = await getUser(req.body);
    // the result is coming inside the object as inside the array

    result?._id
      ? res.json({
          status: "success",
          message: "Login successfull",
          result: {
            name: result.name,
            _id: result._id,
          },
        })
      : res.json({
          status: "error",
          message: "Please check the credential",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
