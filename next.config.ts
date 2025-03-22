import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const remotePatterns: RemotePattern[] = [
  {
    hostname: "picsum.photos",
  },
  {
    hostname: "avatars.githubusercontent.com",
  },
  {
    hostname: "cdn.jsdelivr.net",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: remotePatterns,
  },
};

export default nextConfig;
