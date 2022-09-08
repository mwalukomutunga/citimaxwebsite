/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '',
  compress: false,
  swcMinify: true,
  eslint: {    
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
