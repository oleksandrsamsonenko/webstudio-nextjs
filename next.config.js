/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "@styles/variables/variables.scss";`,
  },
};

module.exports = nextConfig;
