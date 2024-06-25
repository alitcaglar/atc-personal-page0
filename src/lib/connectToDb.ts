import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

type uri = string | undefined | null;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so we can preserve the value across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri as string, options as any);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri as string, options as any);
  clientPromise = client.connect();
}

export default clientPromise;

// import mongoose from "mongoose";

// let connection: any = {};

// export const connectToDb = async (): Promise<void> => {
//   if (connection.isConnected) {
//     console.log("log: already started to connect");
//     return;
//   }
//   try {
//     const db = await mongoose.connect(process.env.MONGO_URI as string);
//     connection.isConnected = db.connections[0].readyState;
//     console.log("log: connected to database");
//   } catch (error) {
//     console.log("log: error connecting to database");
//     throw new Error(error as string);
//   }
// };
