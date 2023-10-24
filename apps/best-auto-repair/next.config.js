/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    images: {
        imageSizes: [16, 32, 48, 64], // This array is concatenated to deviceSizes.
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Next.js default
    deviceSizes: [96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // default
    },
    async rewrites() {
        return [
            {
                source: "/privacy",
                destination: "/documents/privacy.html"
            }
        ]
    }
}

module.exports = nextConfig
