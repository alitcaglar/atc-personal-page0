import mongoose from "mongoose";

const photoAlbumSchema = new mongoose.Schema({
  photoName: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  takenBy: {
    type: String,
    required: true,
    maxLength: 20,
  },
  takenYear: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

export const PhotoAlbum =
  mongoose.models.PhotoAlbum || mongoose.model("PhotoAlbum", photoAlbumSchema);

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

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
