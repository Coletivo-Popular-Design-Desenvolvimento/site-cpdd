import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['@cpdd/ui'],
};

export default nextConfig;
