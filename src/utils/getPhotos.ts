import { connectToDb } from "../lib/connectToDb";
import { PhotoAlbum } from "../lib/models";
import { unstable_noStore as noStore } from "next/cache";

export async function getPhotos() {
  noStore();
  try {
    connectToDb();
    const photos = await PhotoAlbum.find();
    return photos;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch photos");
  }
}
