import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dg4e57nn4fnta.cloudfront.net",
        pathname: "/logos/**",
      },
    ],
  },
};

export default nextConfig;
