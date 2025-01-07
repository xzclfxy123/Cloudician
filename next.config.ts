import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"www.cloudician.xyz"
      }
    ]
  }
};

export default nextConfig;
