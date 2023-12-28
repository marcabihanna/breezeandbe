/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.breezeandbe.com",
      },
    ],
  },
};

module.exports = nextConfig;
