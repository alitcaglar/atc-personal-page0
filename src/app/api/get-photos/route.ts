// pages/api/get-photos.js
import { connectToDb, supabase } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    const { data: photos, error } = await supabase
      .from("photo_albums") // Supabase'deki tablo adı
      .select("*");

    if (error) {
      console.error("Error fetching photos:", error);
      return NextResponse.json(
        { success: false, error: "Failed to fetch photos" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: photos });
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}

//
