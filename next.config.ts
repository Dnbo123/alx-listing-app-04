import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      // Add more patterns if needed
    ],
    domains: ['example.com'], // Add any specific domains you're using
  },
};

export default nextConfig;