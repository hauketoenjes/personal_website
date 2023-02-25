// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
