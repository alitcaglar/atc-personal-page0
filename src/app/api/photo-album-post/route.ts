// pages/api/create-photo.ts
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { createPhotoAlbum } from "@/lib/models";

export async function POST(request: Request) {
  try {
    await connectToDb();
    console.log("connected to database for saving photo");

    // Parse the incoming JSON data
    const data = await request.json();
    console.log("data:", data);

    // Create a new photo album using the data
    const newPhoto = await createPhotoAlbum(data);

    if (newPhoto) {
      // Return success response
      return NextResponse.json({
        success: true,
        message: "Photo saved successfully",
        data: newPhoto,
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to save photo" },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle errors
    console.error("Error saving photo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save photo" },
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
