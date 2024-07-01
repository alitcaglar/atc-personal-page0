// pages/api/get-photos.js
import { connectToDb, supabase } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDb();
    console.log("*api session sucess*");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}

//
