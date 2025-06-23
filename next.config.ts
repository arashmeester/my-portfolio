import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    poweredByHeader: false,
    experimental: {
        optimizeCss: false,
    },
};

export default nextConfig;
