// pages/api/delete-photo.ts
import { NextResponse } from "next/server";
import { deletePhotoAlbum } from "@/lib/models";
import { connectToDb } from "@/lib/connectToDb";

export async function DELETE(request: Request) {
  try {
    await connectToDb();

    // İstekten fotoğraf adını çıkarın
    const { photoName } = await request.json();

    // Fotoğrafı veritabanından silin
    const success = await deletePhotoAlbum(photoName);

    if (success) {
      // Başarı yanıtını döndür
      return NextResponse.json({
        success: true,
        message: "Photo deleted successfully",
      });
    } else {
      // Başarısızlık yanıtını döndür
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
