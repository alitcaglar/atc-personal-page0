import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key environment variables are not defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();

// const uri = process.env.MONGO_URI as string;
// const client = new MongoClient(uri);

// let isConnected = false;

// export const connectToDb = async (): Promise<void> => {
//   if (isConnected) {
//     console.log("log::: already started to connect");
//     return;
//   }
//   try {
//     await client.connect();
//     isConnected = true;
//     console.log("log::: connected to database");
//   } catch (error) {
//     console.log("log::: error connecting to database");
//     throw new Error(error as string);
//   }
// };

// export const getClient = () => client;

///////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const uri = process.env.MONGO_URI;

// let connection: any = {};

// export const connectToDb = async (): Promise<void> => {
//   if (connection.isConnected) {
//     console.log("log: already started to connect");
//     return;
//   }
//   if (!uri) {
//     throw new Error("The MONGO_URI environment variable is not defined");
//   }
//   try {
//     const db = await mongoose.connect(uri as string);
//     connection.isConnected = db.connections[0].readyState;
//     console.log("log: connected to database");
//   } catch (error) {
//     console.log("log: error connecting to database");
//     throw new Error(error as string);
//   }
// };
