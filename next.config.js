/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  }
}
