/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
