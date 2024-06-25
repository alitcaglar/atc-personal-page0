import {
  getPhotoAlbumCollection,
  getUserCollection,
  PhotoAlbum,
  User,
} from "./models";

export async function addPhotoAlbum(photoAlbum: PhotoAlbum) {
  const collection = await getPhotoAlbumCollection();
  await collection.insertOne(photoAlbum);
}

export async function addUser(user: User) {
  const collection = await getUserCollection();
  await collection.insertOne(user);
}

export async function getPhotoAlbum(photoName: string) {
  const collection = await getPhotoAlbumCollection();
  return collection.findOne({ photoName });
}

export async function getUser(email: string) {
  const collection = await getUserCollection();
  return collection.findOne({ email });
}
