import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { PhotoAlbum } from "@/lib/models"; // Assuming you have a Mongoose model defined for PhotoAlbum

export async function POST(request: Request) {
  try {
    // Ensure a valid MongoDB connection
    await connectToDb();

    // Parse the incoming JSON data
    const data = await request.json();

    // Create a new document using the PhotoAlbum model
    const newPhoto = new PhotoAlbum(data);

    // Save the document to the database
    await newPhoto.save();

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Photo saved successfully",
    });
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
// import { PhotoAlbum } from "@/lib/models";

// export async function POST(request: Request) {
//   const data = await request.json();
//   return NextResponse.json({ data });
// }

// export async function GET() {
//   return NextResponse.json({ message: "Hello, Next.js!" });
// }

// export async function POST(request: Request) {
//   const data = await request.json();
//   return NextResponse.json({ data });
// }

// import { NextResponse } from "next/server";
// import { connectToDb } from "@/lib/connectToDb";
// import { PhotoAlbum } from "@/lib/models";

// export default async function handler(req: Request, res: NextResponse) {
//   console.log("Received request with method:", req.method);

//   // Validate request method (only POST allowed)
//   if (req.method !== "POST") {
//     console.error("Error: Invalid HTTP method:", req.method);
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     // Establish database connection
//     await connectToDb();

//     // Extract and validate photo data from request body
//     const { photoName, takenBy, takenYear, photoUrl } = await req.json();

//     if (!photoName || !takenBy || !takenYear || !photoUrl) {
//       return res.status(400).json({ message: "Missing required photo data" });
//     }

//     // Create new PhotoAlbum instance with sanitized data (optional)
//     const newPhoto = new PhotoAlbum({
//       photoName,
//       takenBy,
//       takenYear,
//       photoUrl,
//     });

//     // Save the new photo to the database
//     await newPhoto.save();

//     // Send successful response with created photo data
//     res.status(201).json(newPhoto);
//   } catch (error) {
//     console.error("Error saving photo:", error);
//     res.status(500).json({ message: "Error saving photo" });
//   }
// }

// export async function GET() {
//   return NextResponse.json({ message: "Hello, Next.js!" });
// }

// export async function POST(request: Request) {
//   const data = await request.json();
//   return NextResponse.json({ data });
// }
