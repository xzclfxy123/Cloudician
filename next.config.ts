import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"www.cloudician.xyz",
        port:"3000",
        pathname:"/uploads/**"
      }
    ]
  }
};

export default nextConfig;
