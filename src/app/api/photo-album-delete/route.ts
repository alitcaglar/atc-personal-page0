import { NextResponse } from "next/server";

import { supabase } from "@/lib/connectToDb";

export async function deletePhotoAlbum(photoName: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("photo_albums")
    .delete()
    .eq("photoName", photoName);

  if (error) {
    console.error("Error deleting photo album:", error.message);
    return false;
  }

  console.log("Supabase delete data:", data);
  return true;
}

export async function DELETE(request: Request) {
  try {
    console.log("Connecting to database...");
    console.log("Database connection successful.");

    // İstekten fotoğraf adını çıkarın
    const { photoName } = await request.json();
    console.log("Request received with photoName:", photoName);

    if (!photoName) {
      console.error("Photo name is missing in the request body.");
      return NextResponse.json(
        { success: false, error: "Photo name is required" },
        { status: 400 }
      );
    }

    // Fotoğrafı veritabanından silin
    console.log("Attempting to delete photo with name:", photoName);
    const success = await deletePhotoAlbum(photoName);

    if (success) {
      // Başarı yanıtını döndür
      console.log("Photo deleted successfully.");
      return NextResponse.json({
        success: true,
        message: "Photo deleted successfully",
      });
    } else {
      // Başarısızlık yanıtını döndür
      console.error("Failed to delete photo in the database.");
      return NextResponse.json(
        { success: false, error: "Failed to delete photo" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error deleting photo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { PhotoAlbum } from "@/lib/models"; // Adjust the path as necessary
// import { connectToDb } from "@/lib/connectToDb";

// export async function DELETE(request: Request) {
//   try {
//     await connectToDb();

//     // Extract the photo name from the request
//     const { photoName } = await request.json();

//     // Delete the photo from the database
//     await PhotoAlbum.deleteOne({ photoName });

//     // Return success response
//     return NextResponse.json({
//       success: true,
//       message: "Photo deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting photo:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to delete photo" },
//       { status: 500 }
//     );
//   }
// }
