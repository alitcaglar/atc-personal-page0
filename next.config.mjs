/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "fastly.picsum.photos",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "free-images.com",
    ],
  },
};

export default nextConfig;
