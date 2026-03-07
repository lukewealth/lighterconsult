import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'consult.lighter.online' }],
        destination: '/consult/:path*',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'travel.lighter.online' }],
        destination: '/travel/:path*',
      },
    ];
  },
};

export default nextConfig;
