import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused var checks
    },
};

export default nextConfig;
