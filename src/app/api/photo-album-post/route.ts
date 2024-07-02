// api/photo-album-post.ts

import { NextResponse } from "next/server";

import { createPhotoAlbum } from "@/lib/models";

export async function POST(request: Request) {
  try {
    // Veritabanına bağlan

    console.log("Connected to database for saving photo");

    // Gelen JSON verisini işle
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
