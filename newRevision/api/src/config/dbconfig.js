import mongoose from "mongoose";
const mongoUrl = "mongodb://127.0.0.1:27017/revision";

export const connectDatabase = () => {
  try {
    mongoose.set("strictQuery", true);
    const connectingDatabse = mongoose.connect(mongoUrl);
    connectingDatabse && console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};
