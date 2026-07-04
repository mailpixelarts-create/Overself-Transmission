import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true,
    turbopack: {
        root: __dirname,
    } as any,
    images: {
        unoptimized: true,
        remotePatterns: [
            // Future: add CMS image domains here e.g. cdn.sanity.io
        ],
    },
};

export default nextConfig;
