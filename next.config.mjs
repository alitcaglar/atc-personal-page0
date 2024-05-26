/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fastly.picsum.photos",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
