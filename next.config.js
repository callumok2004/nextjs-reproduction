/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    reactRoot: true
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home"
      }
    ]
  }
}
