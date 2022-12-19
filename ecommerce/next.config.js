/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
    minimumCacheTTL: 60, // Configure the Time to Live (TTL) in seconds for cached optimized images
    deviceSizes: [480, 768, 992], // Breakpoints
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
