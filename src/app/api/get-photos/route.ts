// pages/api/get-photos.js
import { connectToDb } from "@/lib/connectToDb";
import { PhotoAlbum } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    const photos = await PhotoAlbum.find({});
    return NextResponse.json({ success: true, data: photos });
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}
