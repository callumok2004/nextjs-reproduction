/** @type {import('next').NextConfig} */
export default {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  experimental: {
    // concurrentFeatures: true,
    // serverComponents: true,
    // reactRoot: true
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
