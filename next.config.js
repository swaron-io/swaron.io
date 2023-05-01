/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "media.discordapp.net",
      "cdn.discordapp.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
