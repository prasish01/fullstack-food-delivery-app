import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://prasishmega:${process.env.DB_PASS}@cluster0.yogso.mongodb.net/food-delivery`
    )
    .then(() => console.log("DB connected"));
};
