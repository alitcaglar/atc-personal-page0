//out of work

// export interface User {
//   id: number; // PostgreSQL'de genellikle "id" alanı otomatik artan bir tamsayıdır
//   email: string;
//   address?: string;
//   role: "user" | "admin" | "atc266";
// }

// export const userTable = "users"; // Supabase'de kullanılacak tablo adı

// export async function createUser(user: User): Promise<User | null> {
//   const { data, error } = await supabase.from(userTable).insert([
//     {
//       email: user.email,
//       address: user.address,
//       role: user.role,
//     },
//   ]);

//   if (error) {
//     console.error("Error creating user:", error.message);
//     return null;
//   }

//   if (data) {
//     return data[0] as User;
//   }

//   return null;
// }

// export async function updateUserRole(
//   email: string,
//   newRole: string
// ): Promise<User | null> {
//   const { data, error } = await supabase
//     .from(userTable)
//     .update({ role: newRole })
//     .match({ email });

//   if (error) {
//     console.error("Error updating user role:", error.message);
//     return null;
//   }

//   if (data) {
//     return data[0] as User;
//   }

//   return null;
// }

// TODO YUKARISI USER SONRADAN EKLENECEK

// import mongoose from "mongoose";

// const photoAlbumSchema = new mongoose.Schema({
//   photoName: {
//     type: String,
//     required: true,
//     unique: true,
//     maxLength: 20,
//   },
//   takenBy: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   takenYear: {
//     type: String,
//     required: true,
//   },
//   photoUrl: {
//     type: String,
//     required: true,
//   },
// });

// export const PhotoAlbum =
//   mongoose.models.PhotoAlbum || mongoose.model("PhotoAlbum", photoAlbumSchema);

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   address: {
//     type: String,
//   },
//   role: {
//     type: String,
//     enum: ["user", "admin", "atc266"],
//     default: "user",
//   },
// });

// export const User = mongoose.models.User || mongoose.model("User", UserSchema);

// //
