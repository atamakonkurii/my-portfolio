/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
