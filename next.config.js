/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...(isGithubPages ? {
    images: {
      unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    basePath: '/harry-lorent',
    assetPrefix: '/harry-lorent/',
  } : {})
}

module.exports = nextConfig