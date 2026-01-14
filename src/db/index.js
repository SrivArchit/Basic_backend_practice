import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const DB_connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);   
    }
};

export default DB_connect;