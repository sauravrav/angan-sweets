/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://angansweets.com/'], // Replace 'example.com' with your domain
    loader: 'default',
    unoptimized: true,
  },
}

module.exports = nextConfig
