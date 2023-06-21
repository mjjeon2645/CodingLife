/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
