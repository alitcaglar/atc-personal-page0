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
