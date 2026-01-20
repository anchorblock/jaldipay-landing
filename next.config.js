/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

module.exports = nextConfig;
