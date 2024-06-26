import { connectToDb } from "../lib/connectToDb";
import { User } from "../lib/models";
// import { unstable_noStore as noStore } from "next/cache";

export async function getUserRoles() {
  // noStore();
  try {
    connectToDb();
    const userData = await User.find();
    return userData;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch photos");
  }
}
