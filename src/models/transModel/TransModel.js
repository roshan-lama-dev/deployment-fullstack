import TransSchema from "./TransSchema.js";

// while sending th e
export const createTransaction = (transObj) => {
  return TransSchema(transObj).save();
};

export const getTransaction = (filter) => {
  return TransSchema.find();
};
