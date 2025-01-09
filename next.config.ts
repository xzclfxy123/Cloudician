import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"www.cloudician.xyz",
        pathname:"/uploads/**"
      }
    ]
  }
};

export default nextConfig;
