import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    FUSIONCHART_LICENSE: process.env.FUSIONCHART_LICENSE,
  },
};

export default nextConfig;
