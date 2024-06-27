// lib/models.ts
import { supabase } from "@/lib/connectToDb";

export interface PhotoAlbum {
  id: number;
  photoName: string;
  takenBy: string;
  takenYear: string;
  photoUrl: string;
}

export const photoAlbumTable = "photo_albums";

export async function createPhotoAlbum(
  photoAlbum: PhotoAlbum
): Promise<PhotoAlbum | null> {
  const { data, error } = await supabase.from(photoAlbumTable).insert([
    {
      photoName: photoAlbum.photoName,
      takenBy: photoAlbum.takenBy,
      takenYear: photoAlbum.takenYear,
      photoUrl: photoAlbum.photoUrl,
    },
  ]);

  if (error) {
    console.error("Error creating photo album:", error.message);
    return null;
  }

  if (data) {
    return data[0] as PhotoAlbum;
  }

  return null;
}

// import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";

// dotenv.config();

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error("Supabase URL or Key environment variables are not defined");
// }

// const supabase = createClient(supabaseUrl, supabaseKey);

// export interface PhotoAlbum {
//   id: number; // Örneğin, PostgreSQL'de genellikle "id" alanı otomatik artan bir tamsayıdır
//   photoName: string;
//   takenBy: string;
//   takenYear: string;
//   photoUrl: string;
// }

// export const photoAlbumTable = "photo_albums"; // Supabase'de kullanılacak tablo adı

// export async function createPhotoAlbum(
//   photoAlbum: PhotoAlbum
// ): Promise<PhotoAlbum | null> {
//   const { data, error } = await supabase.from(photoAlbumTable).insert([
//     {
//       photoName: photoAlbum.photoName,
//       takenBy: photoAlbum.takenBy,
//       takenYear: photoAlbum.takenYear,
//       photoUrl: photoAlbum.photoUrl,
//     },
//   ]);

//   if (error) {
//     console.error("Error creating photo album:", error.message);
//     return null;
//   }

//   if (data) {
//     return data[0] as PhotoAlbum;
//   }

//   return null;
// }
