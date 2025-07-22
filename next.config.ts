import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  Eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
};

export default nextConfig;
