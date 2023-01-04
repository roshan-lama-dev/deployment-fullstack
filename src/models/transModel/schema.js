import mongoose, { Schema } from "mongoose";

const transaction = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {}
);
