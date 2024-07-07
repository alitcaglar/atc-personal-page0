// api/photo-album-post.ts

import { NextResponse } from "next/server";

import { supabase } from "@/lib/connectToDb";

interface PhotoAlbum {
  id: number;
  photoName: string;
  takenBy: string;
  takenYear: string;
  photoUrl: string;
}

export async function createPhotoAlbum(
  photoAlbum: PhotoAlbum
): Promise<PhotoAlbum | null> {
  try {
    const { data, error } = await supabase.from("photo_albums").insert([
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
  } catch (error) {
    console.error("Error creating photo album:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Data received:", data);

    // Yeni fotoğraf albümü oluştur
    const newPhoto = await createPhotoAlbum(data);

    if (newPhoto) {
      // Başarı yanıtını döndür
      console.log("Photo saved successfully:", newPhoto);
      return NextResponse.json({
        success: true,
        message: "Photo saved successfully",
        data: newPhoto,
      });
    } else {
      // Başarısızlık yanıtını döndür
      console.error("Failed to save photo. 1");
      return NextResponse.json(
        { success: false, error: "Failed to save photo 1" }
        // { status: 500 }
      );
    }
  } catch (error) {
    // Hataları yönet
    console.error("Error saving photo 2:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save photo 2" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { connectToDb } from "@/lib/connectToDb";
// import { PhotoAlbum } from "@/lib/models"; // Assuming you have a Mongoose model defined for PhotoAlbum

// export async function POST(request: Request) {
//   try {
//     // Ensure a valid MongoDB connection
//     await connectToDb();

//     // Parse the incoming JSON data
//     const data = await request.json();

//     // Create a new document using the PhotoAlbum model
//     const newPhoto = new PhotoAlbum(data);

//     // Save the document to the database
//     await newPhoto.save();

//     // Return success response
//     return NextResponse.json({
//       success: true,
//       message: "Photo saved successfully",
//     });
//   } catch (error) {
//     // Handle errors
//     console.error("Error saving photo:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to save photo" },
//       { status: 500 }
//     );
//   }
// }
