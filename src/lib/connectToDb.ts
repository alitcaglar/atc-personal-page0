import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

let connection: any = {};

export const connectToDb = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("log: already started to connect");
    return;
  }
  if (!uri) {
    throw new Error("The MONGO_URI environment variable is not defined");
  }
  try {
    const db = await mongoose.connect(uri as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("log: connected to database");
  } catch (error) {
    console.log("log: error connecting to database");
    throw new Error(error as string);
  }
};
