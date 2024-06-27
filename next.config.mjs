import withWasm from "next-plugin-wasm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fastly.picsum.photos",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
    ],
  },
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

export default withWasm(nextConfig);
