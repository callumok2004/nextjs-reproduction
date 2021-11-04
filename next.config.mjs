/** @type {import('next').NextConfig} */
export default {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
  layer: true,
  experimental: {
    // concurrentFeatures: true,
    // serverComponents: true,
    reactRoot: true,
    topLevelAwait: true
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
