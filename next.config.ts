import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // static export 시 이미지 최적화 비활성화
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
    ],
  },
  output: 'export', // 정적 export 모드
};

export default nextConfig;
