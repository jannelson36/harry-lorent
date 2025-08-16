/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: Boolean(basePath),
  },
  assetPrefix: basePath || '',
  basePath,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;