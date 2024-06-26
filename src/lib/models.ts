import clientPromise from "./connectToDb";

export interface PhotoAlbum {
  photoName: string;
  takenBy: string;
  takenYear: string;
  photoUrl: string;
}

<<<<<<< HEAD
let PhotoAlbum;

try {
  PhotoAlbum = mongoose.model("PhotoAlbum");
} catch (error) {
  PhotoAlbum = mongoose.model("PhotoAlbum", photoAlbumSchema);
}

export { PhotoAlbum };

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin", "atc266"],
    default: "user",
  },
});

let User;

try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", UserSchema);
}

export default User;
=======
export interface User {
  email: string;
  address?: string;
  role: "user" | "admin" | "atc266";
}

export async function getPhotoAlbumCollection() {
  const client = await clientPromise;
  const db = client.db();
  return db.collection<PhotoAlbum>("PhotoAlbum");
}

export async function getUserCollection() {
  const client = await clientPromise;
  const db = client.db();
  return db.collection<User>("User");
}

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

// const User = mongoose.models.User || mongoose.model("User", UserSchema);
// export default User;
>>>>>>> d2f675b634f3cf171ecc2f7051ef3a601a875387
