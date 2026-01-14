import mongoose from "mongoose";
import { DB_NAME } from "./constants";





/*
import express from "express";

const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error", (error) => {
      console.error("Express app error:", error);
      throw error;
    })
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
}
})();
*/