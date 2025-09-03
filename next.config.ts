import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Danger: allows production builds to complete even if there are TypeScript errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Danger: allows production builds to complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
