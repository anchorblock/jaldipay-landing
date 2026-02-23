/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.terrapay.com",
      },
      {
        protocol: "https",
        hostname: "www.thunes.com",
      },
      {
        protocol: "https",
        hostname: "images.g2crowd.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
