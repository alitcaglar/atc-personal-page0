// pages/api/update-photo.ts
import { NextResponse } from "next/server";

import { updatePhotoAlbum } from "@/lib/models";

export async function PATCH(request: Request) {
  try {
    console.log("connected to database for patching");

    // Parse the incoming JSON data
    const data = await request.json();
    console.log("data:", data);

    // Extract the photoName and newPhotoName from the request data
    const { photoName, newPhotoName } = data;

    // Update the photoName with the newPhotoName
    const success = await updatePhotoAlbum(photoName, newPhotoName);

    if (success) {
      // Return success response
      return NextResponse.json({
        success: true,
        message: "Photo updated successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Photo not found or failed to update" },
        { status: 404 }
      );
    }
  } catch (error) {
    // Handle errors
    console.error("Error updating photo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update photo" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { connectToDb } from "@/lib/connectToDb";
// import { PhotoAlbum } from "@/lib/models"; // Assuming you have a Mongoose model defined for PhotoAlbum

// export async function PATCH(request: Request) {
//   try {
//     // Ensure a valid MongoDB connection
//     await connectToDb();
//     console.log("connected to database for patching");
//     // Parse the incoming JSON data
//     const data = await request.json();
//     console.log("data:", data);

//     // Extract the photoName and newPhotoName from the request data
//     const { photoName, newPhotoName } = data;

//     // Find the document to update by photoName
//     const photoToUpdate = await PhotoAlbum.findOne({ photoName });

//     // Check if the document exists
//     if (!photoToUpdate) {
//       return NextResponse.json(
//         { success: false, error: "Photo not found" },
//         { status: 404 }
//       );
//     }

//     // Update the photoName with the newPhotoName
//     photoToUpdate.photoName = newPhotoName;

//     // Save the updated document
//     await photoToUpdate.save();

//     // Return success response
//     return NextResponse.json({
//       success: true,
//       message: "Photo updated successfully",
//     });
//   } catch (error) {
//     // Handle errors
//     console.error("Error updating photo:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update photo" },
//       { status: 500 }
//     );
//   }
// }
