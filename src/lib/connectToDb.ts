import mongoose from "mongoose";

let connection: any = {};

export const connectToDb = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("log: already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("log: connected to database");
  } catch (error) {
    console.log("log: error connecting to database");
    throw new Error(error as string);
  }
};
