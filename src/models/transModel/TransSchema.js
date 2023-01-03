import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    // this userID will be the key to get the transaction only of the logged in users.
    // we will pass this transaction from the session storage of the user. The uniqure userId will be the objectID of the user which is available to us when we create a user in the database. We will store this infomration in the session storage and use pass this while creating a new transaction
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
