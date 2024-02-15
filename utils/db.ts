/* ==================================== Audit Log ======================================== *
 * Title: Database Connection
 * Author: Hashan
 * Created on: 11 Dec 2023
 * Description: This renders the header of the offers page
/* ======================================================================================== */

import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  // Set strictQuery option to true
  mongoose.set("strictQuery", true); // this sets the mongoose options

  // Check if already connected to MongoDB
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Attempt to connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompt-wallet",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Set isConnected flag to true
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    // Log any connection errors
    console.log(error);
  }
};
