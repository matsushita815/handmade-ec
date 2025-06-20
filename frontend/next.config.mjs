/** @type {import('next').NextConfig} */
const nextConfig = {
    // ホットリロード設定
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  
  // API呼び出し用の設定
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ]
  },
};

export default nextConfig;
