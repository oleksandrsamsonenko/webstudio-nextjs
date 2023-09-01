/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "@styles/index.scss";`,
  },
};

module.exports = nextConfig;
