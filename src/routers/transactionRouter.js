import express from "express";
import {
  createTransaction,
  getTransaction,
} from "../models/transModel/TransModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  // here we need to pass the object Id that was created and stored in session storage while creating the new users. Therefore, we will convert the paramater for the createTransaction into object by spreading req.body and then adding the userID in the object. The userId is given to us from the req.header

  //   since we are trying to pass the userId

  const result = await createTransaction(req.body);
  result?._id
    ? res.json({
        status: "success",
        message: "New transaction has been added successfully",
      })
    : res.json({
        status: "error",
        message: "Cannot add the transaction",
      });
  console.log(result);
});

router.get("/", async (req, res, next) => {
  const { authorization } = req.headers;

  //   we have passed the userID that we have recieved from the header as the parameter to the getTransaction .
  // since we have used the monogo model of find one it looks in the database for the record with the property of userId: authorization
  const result = await getTransaction({ userId: authorization });
  console.log(result);
});
export default router;
