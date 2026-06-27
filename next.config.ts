import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography until the shops' real Google Business photos
    // are dropped in. Swap the URLs in src/lib/site.ts.
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
