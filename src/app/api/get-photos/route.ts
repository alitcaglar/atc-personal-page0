// pages/api/get-photos.js
import { supabase } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

// Global değişken, WebSocket bağlantısı için
let subscription: any;

export async function GET() {
  try {
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

    // Eğer abonelik yoksa, yeni bir abonelik oluştur
    if (!subscription) {
      subscription = supabase
        .channel("photo_albums")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "photo_albums" },
          (payload) => {
            console.log("Change received!**payload**api route**", payload);
            NextResponse.json({ success: true, data: photos }); // Re-fetch photos on any changes
          }
        )
        .subscribe((status: any) => {
          if (status === "SUBSCRIBED") {
            console.log("Subscribed to photo_albums changes**api route**");
          }
        });
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

// // pages/api/get-photos.js
// import { supabase } from "@/lib/connectToDb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const { data: photos, error } = await supabase
//       .from("photo_albums") // Supabase'deki tablo adı
//       .select("*");

//     if (error) {
//       console.error("Error fetching photos:", error);
//       return NextResponse.json(
//         { success: false, error: "Failed to fetch photos" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true, data: photos });
//   } catch (error) {
//     console.error("Error fetching photos:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch photos" },
//       { status: 500 }
//     );
//   }
// }

// //
