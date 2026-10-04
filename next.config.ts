import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/navrh-webu", destination: "/kontakt", permanent: true },
      { source: "/web-do-24-hodin", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
