import mongoose from "mongoose";

export const conectToDB = async () => {
  try {
    await mongoose.connect(process.env.mongoUrlUsers!)
    console.log("connected");
  } catch (err) {
    console.log('conected field')
    throw new Error("Field to conected");
  }
};

