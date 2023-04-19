/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.discordapp.net', 'cdn.discordapp.com']
  }
}

module.exports = nextConfig
