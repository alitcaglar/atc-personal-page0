// // pages/api/update-role.ts
// import { NextResponse } from "next/server";
// import { connectToDb } from "@/lib/connectToDb";
// import { updateUserRole } from "@/lib/models";

// export async function PATCH(request: Request) {
//   try {
//     await connectToDb();
//     console.log("connected to database for updating role");

//     // Parse the incoming JSON data
//     const data = await request.json();
//     console.log("data:", data);

//     // Extract the email and newRole from the request data
//     const { email, newRole } = data;

//     // Update user role
//     const updatedUser = await updateUserRole(email, newRole);

//     if (updatedUser) {
//       // Return success response
//       return NextResponse.json({
//         success: true,
//         message: "Role updated successfully",
//         data: updatedUser,
//       });
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Failed to update role" },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     // Handle errors
//     console.error("Error updating role:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update role" },
//       { status: 500 }
//     );
//   }
// }

// // TODO : patch apisine bak ayni sekilde rol degisme apisi yap

// // import { NextResponse } from "next/server";
// // import { connectToDb } from "@/lib/connectToDb";
// // import { User } from "@/lib/models";

// // export async function PATCH(request: Request) {
// //   try {
// //     // Ensure a valid MongoDB connection
// //     await connectToDb();
// //     console.log("connected to database for changing role");
// //     // Parse the incoming JSON data
// //     const data = await request.json();
// //     console.log("data:", data);

// //     // Extract the photoName and newPhotoName from the request data
// //     const { email, newRole } = data;

// //     // Find the document to update by photoName
// //     const roleEmailToUpdate = await User.findOne({ email });

// //     // Check if the document exists
// //     if (!roleEmailToUpdate) {
// //       return NextResponse.json(
// //         { success: false, error: "Role not found" },
// //         { status: 404 }
// //       );
// //     }

// //     // Update the photoName with the newPhotoName
// //     roleEmailToUpdate.role = newRole;

// //     // Save the updated document
// //     await roleEmailToUpdate.save();

// //     // Return success response
// //     return NextResponse.json({
// //       success: true,
// //       message: "Photo updated successfully",
// //     });
// //   } catch (error) {
// //     // Handle errors
// //     console.error("Error updating photo:", error);
// //     return NextResponse.json(
// //       { success: false, error: "Failed to update photo" },
// //       { status: 500 }
// //     );
// //   }
// // }

//TODO
