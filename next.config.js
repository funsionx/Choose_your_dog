/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["s3.us-west-004.backblazeb2.com"] },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API_KEY: "BQkgGD8nJ9urjFU5ofrrBQ==Z9P8oLuiyqxaqcyC",
  },
};

module.exports = nextConfig;
