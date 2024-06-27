import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

let connection: any = {};

export const connectToDb = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("log: already started to connect");
    return;
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
