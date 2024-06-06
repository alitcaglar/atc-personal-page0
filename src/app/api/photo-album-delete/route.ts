import { NextResponse } from "next/server";
import { PhotoAlbum } from "@/lib/models"; // Adjust the path as necessary
import { connectToDb } from "@/lib/connectToDb";

export async function DELETE(request: Request) {
  try {
    await connectToDb();

    // Extract the photo name from the request
    const { photoName } = await request.json();

    // Delete the photo from the database
    await PhotoAlbum.deleteOne({ photoName });

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Photo deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting photo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}
