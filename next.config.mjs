/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'w16manik.blr1.cdn.digitaloceanspaces.com'
            }
        ]
    }
};

export default nextConfig;
