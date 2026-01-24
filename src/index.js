import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";



dotenv.config({
  path: "./.env"
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });



















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