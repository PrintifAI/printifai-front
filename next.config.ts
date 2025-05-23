import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3005',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'printifai.ru',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
