/** @type {import('next').NextConfig} */
const nextConfig = {
  // for STATIC BUILD
  output: "export",
  images: {
    unoptimized: true,
  },
  // for STATIC BUILD
};

module.exports = nextConfig;
