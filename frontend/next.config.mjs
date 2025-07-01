/** @type {import('next').NextConfig} */
const nextConfig = {
  // API呼び出し用の設定
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ]
  },
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
