/** @type {import('next').NextConfig} */
const repo = 'daksh-portfolio';            // <-- your repo name
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};
module.exports = nextConfig;
